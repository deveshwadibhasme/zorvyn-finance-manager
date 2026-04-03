import { Table } from "antd";
import React, { useEffect, useState } from "react";
import useRole from "../../../hooks/useRole";

const TransactionTable = ({ dataSource }) => {
  const { data } = useRole();
  const [columnData, setColumnData] = useState();
  const [access, setAccess] = useState(data?.permission?.canAdd);

  const columns = [
    {
      key: "1",
      title: "Sr. No",
      dataIndex: "id",
      text: ({ _, dt }) => <span>{dt.id}</span>,
    },
    {
      key: "2",
      title: "Category",
      dataIndex: "category",
      text: ({ _, dt }) => <span>{dt.category?.toUpperCase()}</span>,
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
    setAccess(!access);
    if (access) {
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
  }, [data?.permission.canAdd]);

  return (
    <Table
      className="mt-5"
      dataSource={dataSource}
      columns={columnData}
    ></Table>
  );
};

export default TransactionTable;
