import { Card, Select, Tag } from "antd";
import CardMeta from "antd/es/card/CardMeta";
import moment from "moment";
import React from "react";

const TaskCard = ({ item, deleteTask, updateTask, index }) => {
  return (
    <Card hoverable key={index} >
      <CardMeta title={item.title} description={item.description} />
      <div className="mt-4 flex mb-3 justify-between items-center">
        <div className="flex items-center">
          <Tag className="!capitalize">{item.status}</Tag>
          {item.status === "completed" && (
            <Tag className="!capitalize">{item.priority}</Tag>
          )}
          <Tag
            onClick={() => deleteTask(item.id)}
            className=" !bg-rose-600 !border-red-500 !text-white "
          >
            Delete
          </Tag>
        </div>
        <Select
          size="small"
          placeholder="Change Status"
          onChange={(status) => updateTask(item.id, status)}
        >
          <Option value="pending">Pending</Option>
          <Option value="Inprogress">Inprogress</Option>
          <Option value="completed">Completed</Option>
        </Select>
      </div>
      <label className="text-gray-600">
        {moment(item.taskDate).format("DD MMM YYYY hh:mm A")}
      </label>
    </Card>
  );
};

export default TaskCard;
