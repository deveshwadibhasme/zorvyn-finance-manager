import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import useRole from "../../../hooks/useRole";

const TransactionTable = ({ dataSource, loading }) => {
  const { permission } = useRole();
  const [columnData, setColumnData] = useState();

  const columns = [
    {
      key: "2",
      title: "Category",
      dataIndex: "category",
      render: (_, { category }, index) => (
        <Tag
          key={index}
          color={category === "income" ? "green-inverse" : "blue-inverse"}
        >
          {category?.toUpperCase()}
        </Tag>
      ),
    },
    {
      key: "3",
      title: "Amount",
      dataIndex: "amount",
      text: ({ _, dt }) => <span>{dt.id}</span>,
    },
    {
      key: "3",
      title: "Description",
      dataIndex: "description",
      text: ({ _, dt }) => <span>{dt.description}</span>,
    },
    {
      key: "3",
      title: "Date",
      dataIndex: "date",
      text: ({ _, dt }) => <span>{dt.date}</span>,
    },
    {
      key: "4",
      title: "Method",
      dataIndex: "method",
      text: ({ _, dt }) => <span>{dt.method}</span>,
    },
  ];

  useEffect(() => {
    setColumnData(columns);
    if (permission?.canAdd) {
      setColumnData((prevState) => {
        return [
          ...prevState,
          {
            key: "5",
            title: "Action",
            render: () => (
              <div className="flex gap-2">
                <button className="text-blue-500 hover:underline cursor-pointer">
                  Edit
                </button>
                <button className="text-red-500 hover:underline cursor-pointer">
                  Delete
                </button>
              </div>
            ),
          },
        ];
      });
    }
  }, [permission?.canAdd]);

  return (
    <Table
      className="mt-5 w-full overflow-x-scroll bg-white"
      dataSource={dataSource}
      columns={columnData}
      loading={loading}
    ></Table>
  );
};

export default TransactionTable;
