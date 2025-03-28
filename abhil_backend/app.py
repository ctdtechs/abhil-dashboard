from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Database Configuration
DB_USERNAME = "root"
DB_PASSWORD = "vicky%40123"
DB_NAME = "test_db_py"
DB_HOST = "localhost"  # Change to your DB server if hosted elsewhere

app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+mysqlconnector://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# Define the Files Table Model
class File(db.Model):
    __tablename__ = "files"

    id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(255))
    file_path = db.Column(db.String(255))
    total_pages = db.Column(db.Integer)
    uploaded_by = db.Column(db.String(100))
    processing_status = db.Column(db.String(50))
    processing_time = db.Column(db.Float)
    uploaded_at = db.Column(db.DateTime)
    downloaded_on = db.Column(db.DateTime, nullable=True)
    processing_type = db.Column(db.String(50))
    purged_on = db.Column(db.DateTime, nullable=True)
    purged_status = db.Column(db.String(50))

# Define the Aadhaar Occurrences Table Model
class AadhaarOccurrence(db.Model):
    __tablename__ = "aadhaar_occurrences"

    id = db.Column(db.Integer, primary_key=True)
    file_id = db.Column(db.Integer, db.ForeignKey("files.id"), nullable=False)
    page_number = db.Column(db.Integer)
    aadhaar_count = db.Column(db.Integer)
    detection_method = db.Column(db.String(50))
    masking_status = db.Column(db.String(50))
    masked_at = db.Column(db.DateTime, nullable=True)

# API Endpoint to Fetch Data
@app.route("/api/files", methods=["GET"])
def get_files():
    files = File.query.all()
    response = []

    for file in files:
        aadhaar_occurrences = AadhaarOccurrence.query.filter_by(file_id=file.id).all()
        
        aadhaar_list = [
            {
                "id": a.id,
                "page_number": a.page_number,
                "aadhaar_count": a.aadhaar_count,
                "detection_method": a.detection_method,
                "masking_status": a.masking_status,
                "masked_at": a.masked_at.strftime("%Y-%m-%dT%H:%M:%S") if a.masked_at else None,
            }
            for a in aadhaar_occurrences
        ]

        response.append({
            "id": file.id,
            "file_name": file.file_name,
            "file_path": file.file_path,
            "total_pages": file.total_pages,
            "uploaded_by": file.uploaded_by,
            "processing_status": file.processing_status,
            "processing_time": file.processing_time,
            "uploaded_at": file.uploaded_at.strftime("%Y-%m-%dT%H:%M:%S") if file.uploaded_at else None,
            "downloaded_on": file.downloaded_on.strftime("%Y-%m-%dT%H:%M:%S") if file.downloaded_on else None,
            "processing_type": file.processing_type,
            "purged_on": file.purged_on.strftime("%Y-%m-%dT%H:%M:%S") if file.purged_on else None,
            "purged_status": file.purged_status,
            "aadhaar_occurrences": aadhaar_list,
        })

    return jsonify(response)

# Run the Flask App
if __name__ == "__main__":
    app.run(debug=True)