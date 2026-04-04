import React from "react";
import { Form, Input, Select, DatePicker, Space } from "antd";

const TransactionFilter = ({ onFilterChange }) => {
  const [form] = Form.useForm();

  const handleValuesChange = (_, allValues) => {
    const formattedValues = {
      ...allValues,
      date: allValues.date ? allValues.date.format("YYYY-MM-DD") : "",
    };
    onFilterChange(formattedValues);
  };

  return (
    <div className="p-4 mt-5 bg-gray-100 rounded-lg mb-4">
      <Form
        form={form}
        layout="inline"
        onValuesChange={handleValuesChange}
        initialValues={{
          search: "",
          category: "",
          type: "all",
          date: null,
        }}
      >
        <Space wrap>
          <Form.Item name="search">
            <Input placeholder="Search transactions..." allowClear />
          </Form.Item>

          <Form.Item name="category">
            <Select
              style={{ width: 150 }}
              placeholder="Category"
              options={[
                { value: "", label: "All Categories" },
                { value: "food", label: "Food" },
                { value: "rent", label: "Rent" },
                { value: "salary", label: "Salary" },
                { value: "utilities", label: "Utilities" },
              ]}
            />
          </Form.Item>

          <Form.Item name="type">
            <Select
              style={{ width: 120 }}
              options={[
                { value: "all", label: "All Types" },
                { value: "income", label: "Income" },
                { value: "expense", label: "Expense" },
              ]}
            />
          </Form.Item>

          <Form.Item name="date">
            <DatePicker placeholder="Select Date" />
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};

export default TransactionFilter;
