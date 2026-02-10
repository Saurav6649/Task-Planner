import { Badge, Empty } from "antd";
import TaskCard from "./TaskCard";
import { Plus } from "lucide-react";

const TaskColumn = ({
  title,
  tasks,
  setOpen,
  deleteTask,
  updateTask,
}) => {
  const ribbonClassMap = {
    Highest: "bg-gradient-to-br !from-red-600 !via-red-500 !to-red-400",
    Medium: "bg-gradient-to-br !from-yellow-500 !via-orange-400 !to-yellow-300",
    Lowest: "bg-gradient-to-br !from-green-600 !via-green-500 !to-green-400",
  };

  return (
    <div className="lg:h-[450px] lg:min-h-0 h-[300px]">
      <Badge.Ribbon
        text={title}
        className={`${ribbonClassMap[title]} !font-medium !z-[20000]`}
      />

      <div className="bg-white rounded-lg h-full overflow-y-auto w-full flex flex-col p-6">
        <div className="flex flex-col gap-4 mt-4 w-full">
          {tasks.length === 0 && (
            <>
              <Empty description="No task added" />
              <button
                onClick={() => setOpen(true)}
                className="bg-pink-500 text-white px-3 py-2 flex items-center gap-2 rounded-lg w-fit mx-auto"
              >
                <Plus className="w-4 h-4" /> Add Task
              </button>
            </>
          )}

          {tasks.map((item) => (
            <TaskCard
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
