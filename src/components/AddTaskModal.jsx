import { Modal, Form, Input, Select, Button, DatePicker } from "antd";

const { Option } = Select;

const AddTaskModal = ({ open, setOpen, addTasks }) => {
  const [form] = Form.useForm();

  const createTask = (values) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      priority: values.priority,
      status: "pending",
      taskDate: values.date.format("YYYY-MM-DD"), // 👈 MAIN FILTER FIELD
      createdAt: new Date().toISOString(), // 👈 history/sorting
    };

    addTasks(newTask);
    setOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
      title="Add Task"
    >
      <Form form={form} onFinish={createTask}>
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input placeholder="Task Name" size="large" />
        </Form.Item>

        <Form.Item name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={4} placeholder="Description" />
        </Form.Item>

        <Form.Item name="priority" rules={[{ required: true }]}>
          <Select placeholder="Select Priority">
            <Option value="highest">Highest</Option>
            <Option value="medium">Medium</Option>
            <Option value="lowest">Lowest</Option>
          </Select>
        </Form.Item>

        <Form.Item name="date" rules={[{ required: true }]}>
          <DatePicker className="!w-full" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
