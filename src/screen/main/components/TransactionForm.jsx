import { Form, Input, Select, DatePicker, Button, message } from "antd";
import useFinancialStats from "../../../hooks/useFinancialStats";

const TransactionForm = ({
  type,
  addTransaction,
  transaction,
  open,
  setOpen,
}) => {
  const [form] = Form.useForm();
  const { balance } = useFinancialStats();

  const openModal = () => {
    setOpen(!open);
  };

  const onFinish = (values) => {
    if (type === "add") {
      if (values.category === "expense" && balance < Number(values.amount)) {
        message.info("You don't have enough money");
        return;
      }
      addTransaction({
        id: transaction.length + 1,
        ...values,
        amount: Number(values.amount),
        date: values.date.format("DD/MM/YYYY"),
      });
      openModal();
      message.success("Transaction Added");
      form.resetFields();
    } else {
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ category: "income" }}
    >
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select
          options={[
            { value: "income", label: "Income" },
            { value: "expense", label: "Expense" },
          ]}
        />
      </Form.Item>

      <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
        <Input type="number" placeholder="Enter amount" />
      </Form.Item>

      <Form.Item name="date" label="Date" rules={[{ required: true }]}>
        <DatePicker className="w-full" format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter description" />
      </Form.Item>

      <Form.Item name="method" label="Method" rules={[{ required: true }]}>
        <Input placeholder="e.g. Bank Transfer, Cash" />
      </Form.Item>

      <Form.Item className="mb-0">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-10 bg-blue-600 hover:bg-blue-700"
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
