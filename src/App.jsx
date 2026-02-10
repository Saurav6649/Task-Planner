import {
  Badge,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Tag,
} from "antd";
import CardMeta from "antd/es/card/CardMeta";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { usePlanner } from "./store/usePlanner";

const App = () => {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  // const { task, addtask } = usePlanner();

  const createTask = (value) => {
    // value.status = "pending";
    // addtask(value);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    const updateTime = () => {
      setTimer(new Date().toLocaleTimeString());
      setTimeout(updateTime, 1000);
    };

    updateTime();
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-gray-100 ">
      {/* toop nav */}
      <nav className="w-full bg-linear-165 from-rose-900 via-rose-300 to-pink-900 h-[60px] fixed top-0 flex items-center justify-between px-8 left-0">
        <div className="flex items-center ">
          <div>
            <span className="w-2 h-2 text-lg bg-[linear-gradient(335deg,_#ff9a9e,_#fad0c4,_hsl(5.3,_84.9317766673029%,_53.015459374014654%))] text-red-900 px-3 py-2.5 font-bold rounded-full">
              PL
            </span>
          </div>
          <p className="font-medium text-white text-lg">anner</p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-white text-xl font-semibold">{timer}</h1>
          <DatePicker />
          <button
            onClick={() => setOpen(true)}
            className=" bg-[linear-gradient(249deg,_#fccb90,_#d57eeb)] text-white flex items-center text-sm gap-2 font-semibold px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-110"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
          <Button type="primary" className="!font-semibold" danger>
            Delete
          </Button>
        </div>
      </nav>
      {/* main section */}
      <section className="fixed top-[60px]  h-[calc(100%-120px)] w-full grid lg:grid-cols-3 gap-8 p-5 overflow-y-auto">
        <div className=" lg:h-full lg:min-h-0 h-[300px]">
          <Badge.Ribbon
            text="Highest"
            className="bg-gradient-to-br  !from-rose-600 !via-pink-500 !to-rose-500 !font-medium !z-[20000]"
          />
          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6">
            <div className="flex flex-col gap-4 mt-4">
              {Array(20)
                .fill(0)
                .map((item, index) => (
                  <Card hoverable key={index}>
                    <CardMeta
                      title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente iure impedit tempora assumenda quam ducimus explicabo perferendis nesciunt corporis error veniam eaque ea repudiandae mollitia illum quia ad iste."
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <Tag>Pending</Tag>
                        <button className="bg-rose-600 border-red-500 text-white px-3 ml-3 rounded-lg">
                          Delete
                        </button>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Option value="pending">Pending</Option>
                        <Option value="Inprogress">Inprogress</Option>
                        <Option value="completed">Completed</Option>
                      </Select>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <div className=" lg:h-full lg:min-h-0 h-[300px]">
          <Badge.Ribbon
            text="Medium"
            className="bg-gradient-to-br !from-indigo-600 !via-blue-500 !to-indigo-500 !font-medium !z-[20000]"
          />
          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6">
            <div className="flex flex-col gap-4 mt-4">
              {Array(20)
                .fill(0)
                .map((item, index) => (
                  <Card hoverable key={index}>
                    <CardMeta
                      title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente iure impedit tempora assumenda quam ducimus explicabo perferendis nesciunt corporis error veniam eaque ea repudiandae mollitia illum quia ad iste."
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <Tag>Pending</Tag>
                        <button className="bg-rose-600 border-red-500 text-white px-3 ml-3 rounded-lg">
                          Delete
                        </button>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Option value="pending">Pending</Option>
                        <Option value="Inprogress">Inprogress</Option>
                        <Option value="completed">Completed</Option>
                      </Select>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <div className=" lg:h-full lg:min-h-0 h-[300px]">
          <Badge.Ribbon
            text="Lowest"
            className="bg-gradient-to-br  !from-amber-600 !via-orange-500 !to-amber-500 !font-medium !z-[20000]"
          />
          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6">
            <div className="flex flex-col gap-4 mt-4">
              {Array(20)
                .fill(0)
                .map((item, index) => (
                  <Card hoverable key={index}>
                    <CardMeta
                      title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente iure impedit tempora assumenda quam ducimus explicabo perferendis nesciunt corporis error veniam eaque ea repudiandae mollitia illum quia ad iste."
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <Tag>Pending</Tag>
                        <button className="bg-rose-600 border-red-500 text-white px-3 ml-3 rounded-lg">
                          Delete
                        </button>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Option value="pending">Pending</Option>
                        <Option value="Inprogress">Inprogress</Option>
                        <Option value="completed">Completed</Option>
                      </Select>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* bottom fotter */}
      <footer className="w-full bg-linear-165 from-rose-900 via-rose-300 to-pink-900  h-[60px] flex items-center fixed bottom-0 left-0">
        <div className="flex items-center justify-between px-6 text-white w-full">
          <h1 className="font-semibold text-white text-xl">Total Task - 22</h1>
          <p className="underline text-white/80 hover:text-white cursor-pointer font-medium">
            www.SpeeWork.co
          </p>
        </div>
        <div></div>
      </footer>
      <Modal onCancel={handleCancel} open={open} title="Add Task" footer={null}>
        <Form onFinish={createTask}>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Task Name" size="large" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Task description goes here" rows={5} />
          </Form.Item>
          <Form.Item
            name="priority"
            rules={[{ required: true, message: "Please select priority" }]}
          >
            <Select placeholder="Select Priority" size="large">
              <Option value="highest">Highest</Option>
              <Option value="medium">Medium</Option>
              <Option value="lower">Lowest</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
