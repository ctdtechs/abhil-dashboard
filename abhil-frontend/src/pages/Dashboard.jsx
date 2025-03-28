import React, { useState, useEffect } from "react";
import { Table, Drawer, Button, Tag, Input, message } from "antd";
import moment from "moment";
import axios from "axios";

const { Search } = Input;

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/files");
        setData(response.data);
      } catch (error) {
        message.error("Failed to fetch data!");
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      render: (text) => (
        <Tag color={text === "Completed" ? "green" : "yellow"}>{text}</Tag>
      ),
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
      <div className="flex items-center justify-between mb-5">
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
        loading={loading}
      />
      <Drawer
        title="Overview Details"
        width={800}
        onClose={closeDrawer}
        open={visible}
      >
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
