import React, { useState } from "react";
import { Table, Drawer, Button, Tag, Input } from "antd";
import moment from "moment";

const { Search } = Input;

const data = [
  {
    id: 1,
    file_name: "sample_1.pdf",
    file_path: "/uploads/sample_1.pdf",
    total_pages: 3,
    uploaded_by: "admin",
    processing_status: "Completed",
    processing_time: 8.3,
    uploaded_at: "2025-03-26T09:15:00",
    downloaded_on: "2025-03-26T09:20:00",
    processing_type: "Realtime",
    purged_on: "2025-03-27T10:00:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 201,
        page_number: 1,
        aadhaar_count: 2,
        detection_method: "OCR",
        masking_status: "Masked",
        masked_at: "2025-03-26T09:17:00",
      },
    ],
  },
  {
    id: 2,
    file_name: "sample_2.pdf",
    file_path: "/uploads/sample_2.pdf",
    total_pages: 5,
    uploaded_by: "john",
    processing_status: "Completed",
    processing_time: 11.7,
    uploaded_at: "2025-03-25T14:22:00",
    downloaded_on: "2025-03-25T14:30:00",
    processing_type: "Historical",
    purged_on: "2025-03-27T12:00:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 202,
        page_number: 2,
        aadhaar_count: 1,
        detection_method: "Regex",
        masking_status: "Masked",
        masked_at: "2025-03-25T14:25:00",
      },
      {
        id: 203,
        page_number: 4,
        aadhaar_count: 1,
        detection_method: "AI Model",
        masking_status: "Masked",
        masked_at: "2025-03-25T14:26:00",
      },
    ],
  },
  {
    id: 3,
    file_name: "report_1.pdf",
    file_path: "/uploads/report_1.pdf",
    total_pages: 10,
    uploaded_by: "alice",
    processing_status: "Completed",
    processing_time: 15.2,
    uploaded_at: "2025-03-24T11:10:00",
    downloaded_on: "2025-03-24T11:20:00",
    processing_type: "Realtime",
    purged_on: "2025-03-26T15:30:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 301,
        page_number: 5,
        aadhaar_count: 3,
        detection_method: "OCR",
        masking_status: "Masked",
        masked_at: "2025-03-24T11:15:00",
      },
    ],
  },
  {
    id: 4,
    file_name: "invoice_2025.pdf",
    file_path: "/uploads/invoice_2025.pdf",
    total_pages: 7,
    uploaded_by: "michael",
    processing_status: "Completed",
    processing_time: 9.8,
    uploaded_at: "2025-03-23T08:45:00",
    downloaded_on: "2025-03-23T08:50:00",
    processing_type: "Historical",
    purged_on: "2025-03-27T14:10:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 401,
        page_number: 3,
        aadhaar_count: 1,
        detection_method: "AI Model",
        masking_status: "Masked",
        masked_at: "2025-03-23T08:47:00",
      },
    ],
  },
  {
    id: 5,
    file_name: "confidential_doc.pdf",
    file_path: "/uploads/confidential_doc.pdf",
    total_pages: 12,
    uploaded_by: "sophia",
    processing_status: "Completed",
    processing_time: 18.5,
    uploaded_at: "2025-03-22T14:00:00",
    downloaded_on: "2025-03-22T14:10:00",
    processing_type: "Realtime",
    purged_on: "2025-03-28T09:00:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 501,
        page_number: 6,
        aadhaar_count: 2,
        detection_method: "Regex",
        masking_status: "Masked",
        masked_at: "2025-03-22T14:05:00",
      },
    ],
  },
  {
    id: 6,
    file_name: "legal_notice.pdf",
    file_path: "/uploads/legal_notice.pdf",
    total_pages: 15,
    uploaded_by: "david",
    processing_status: "Completed",
    processing_time: 22.1,
    uploaded_at: "2025-03-21T09:30:00",
    downloaded_on: "2025-03-21T09:40:00",
    processing_type: "Historical",
    purged_on: "2025-03-29T11:20:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 601,
        page_number: 2,
        aadhaar_count: 1,
        detection_method: "OCR",
        masking_status: "Masked",
        masked_at: "2025-03-21T09:35:00",
      },
      {
        id: 602,
        page_number: 10,
        aadhaar_count: 2,
        detection_method: "AI Model",
        masking_status: "Masked",
        masked_at: "2025-03-21T09:38:00",
      },
    ],
  },
  {
    id: 7,
    file_name: "bank_statement.pdf",
    file_path: "/uploads/bank_statement.pdf",
    total_pages: 20,
    uploaded_by: "emma",
    processing_status: "Completed",
    processing_time: 25.6,
    uploaded_at: "2025-03-20T16:15:00",
    downloaded_on: "2025-03-20T16:25:00",
    processing_type: "Realtime",
    purged_on: "2025-03-30T10:00:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 701,
        page_number: 8,
        aadhaar_count: 1,
        detection_method: "Regex",
        masking_status: "Masked",
        masked_at: "2025-03-20T16:20:00",
      },
    ],
  },
  {
    id: 8,
    file_name: "contract_agreement.pdf",
    file_path: "/uploads/contract_agreement.pdf",
    total_pages: 18,
    uploaded_by: "william",
    processing_status: "Completed",
    processing_time: 20.4,
    uploaded_at: "2025-03-19T13:40:00",
    downloaded_on: "2025-03-19T13:50:00",
    processing_type: "Historical",
    purged_on: "2025-03-31T12:00:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 801,
        page_number: 4,
        aadhaar_count: 2,
        detection_method: "OCR",
        masking_status: "Masked",
        masked_at: "2025-03-19T13:45:00",
      },
    ],
  },
  {
    id: 9,
    file_name: "employee_record.pdf",
    file_path: "/uploads/employee_record.pdf",
    total_pages: 25,
    uploaded_by: "olivia",
    processing_status: "Completed",
    processing_time: 30.2,
    uploaded_at: "2025-03-18T09:10:00",
    downloaded_on: "2025-03-18T09:20:00",
    processing_type: "Realtime",
    purged_on: "2025-04-01T15:30:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 901,
        page_number: 6,
        aadhaar_count: 1,
        detection_method: "AI Model",
        masking_status: "Masked",
        masked_at: "2025-03-18T09:15:00",
      },
    ],
  },
  {
    id: 10,
    file_name: "insurance_policy.pdf",
    file_path: "/uploads/insurance_policy.pdf",
    total_pages: 12,
    uploaded_by: "james",
    processing_status: "Completed",
    processing_time: 17.8,
    uploaded_at: "2025-03-17T14:55:00",
    downloaded_on: "2025-03-17T15:05:00",
    processing_type: "Historical",
    purged_on: "2025-04-02T10:45:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 1001,
        page_number: 3,
        aadhaar_count: 2,
        detection_method: "Regex",
        masking_status: "Masked",
        masked_at: "2025-03-17T15:00:00",
      },
    ],
  },
  {
    id: 11,
    file_name: "property_deed.pdf",
    file_path: "/uploads/property_deed.pdf",
    total_pages: 30,
    uploaded_by: "charlotte",
    processing_status: "Completed",
    processing_time: 35.6,
    uploaded_at: "2025-03-16T08:30:00",
    downloaded_on: "2025-03-16T08:40:00",
    processing_type: "Realtime",
    purged_on: "2025-04-03T14:20:00",
    purged_status: "Purged",
    aadhaar_occurrences: [
      {
        id: 1101,
        page_number: 7,
        aadhaar_count: 3,
        detection_method: "OCR",
        masking_status: "Masked",
        masked_at: "2025-03-16T08:35:00",
      },
    ],
  },
  {
    id: 12,
    file_name: "medical_report.pdf",
    file_path: "/uploads/medical_report.pdf",
    total_pages: 22,
    uploaded_by: "henry",
    processing_status: "Completed",
    processing_time: 28.3,
    uploaded_at: "2025-03-15T12:20:00",
    downloaded_on: "2025-03-15T12:30:00",
    processing_type: "Historical",
    purged_on: "2025-04-04T09:50:00",
    purged_status: "Not Purged",
    aadhaar_occurrences: [
      {
        id: 1201,
        page_number: 9,
        aadhaar_count: 1,
        detection_method: "AI Model",
        masking_status: "Masked",
        masked_at: "2025-03-15T12:25:00",
      },
    ],
  },
];

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchText, setSearchText] = useState("");

  const showDrawer = (record) => {
    setSelectedFile(record);
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
    setSelectedFile(null);
  };

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (val) => val && val.toString().toLowerCase().includes(searchText)
    )
  );

  const columns = [
    {
      title: "File Name",
      dataIndex: "file_name",
      key: "file_name",
      ellipsis: true,
    },
    {
      title: "Total Pages",
      dataIndex: "total_pages",
      key: "total_pages",
      ellipsis: true,
    },
    {
      title: "Uploaded By",
      dataIndex: "uploaded_by",
      key: "uploaded_by",
      ellipsis: true,
    },
    {
      title: "Processing Status",
      dataIndex: "processing_status",
      key: "processing_status",
      ellipsis: true,
      render: (text) => <Tag color="green">{text}</Tag>,
    },
    {
      title: "Processing Time (s)",
      dataIndex: "processing_time",
      key: "processing_time",
      ellipsis: true,
    },
    {
      title: "Uploaded At",
      dataIndex: "uploaded_at",
      key: "uploaded_at",
      ellipsis: true,
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm"),
    },
    {
      title: "Downloaded On",
      dataIndex: "downloaded_on",
      key: "downloaded_on",
      ellipsis: true,
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm"),
    },
    {
      title: "Processing Type",
      dataIndex: "processing_type",
      key: "processing_type",
      ellipsis: true,
    },
    {
      title: "Purged Status",
      dataIndex: "purged_status",
      key: "purged_status",
      ellipsis: true,
      render: (text) => (
        <Tag color={text === "Purged" ? "red" : "green"}>{text}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button onClick={() => showDrawer(record)}>View Details</Button>
      ),
    },
  ];

  const aadhaarColumns = [
    { title: "Page Number", dataIndex: "page_number", key: "page_number" },
    {
      title: "Aadhaar Count",
      dataIndex: "aadhaar_count",
      key: "aadhaar_count",
    },
    {
      title: "Detection Method",
      dataIndex: "detection_method",
      key: "detection_method",
    },
    {
      title: "Masking Status",
      dataIndex: "masking_status",
      key: "masking_status",
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: "Masked At",
      dataIndex: "masked_at",
      key: "masked_at",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm"),
    },
  ];

  return (
    <div>
      <div
        className="flex items-center justify-between mb-5"
      >
        <h1 className="text-lg font-semibold">File Details</h1>
        <Search
          placeholder="Search..."
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        size="small"
        pagination={{ pageSize: 7 }}
      />
      <Drawer title="Overview Details" width={800} onClose={closeDrawer} open={visible}>
        {selectedFile && (
          <Table
            columns={aadhaarColumns}
            dataSource={selectedFile.aadhaar_occurrences}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            size="small"
          />
        )}
      </Drawer>
    </div>
  );
};

export default Dashboard;
