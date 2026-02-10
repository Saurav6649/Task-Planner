import { useState } from "react";
import { usePlanner } from "./store/usePlanner";
import Layout from "./components/Layout";
import TaskColumn from "./components/TaskColumn";
import AddTaskModal from "./components/AddTaskModal";

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const { tasks, addTasks, deleteTask, updateTask } = usePlanner();

  const filteredTasks = selectedDate
    ? tasks.filter((task) => task.taskDate === selectedDate)
    : tasks;

  const highest = filteredTasks.filter(
    (t) => t.priority === "highest" && t.status !== "completed",
  );

  const medium = filteredTasks.filter(
    (t) => t.priority === "medium" && t.status !== "completed",
  );

  const lowest = filteredTasks.filter(
    (t) => t.priority === "lowest" && t.status !== "completed",
  );

  const completed = filteredTasks.filter((t) => t.status === "completed");
  return (
    <Layout setOpen={setOpen} setSelectedDate={setSelectedDate}>
      <section className="h-full px-10 py-5 w-[2000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center  ">
         <TaskColumn
              title="Highest"
              tasks={highest}
              setOpen={setOpen}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
            <TaskColumn
              title="Medium"
              tasks={medium}
              setOpen={setOpen}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
            <TaskColumn
              title="Lowest"
              tasks={lowest}
              setOpen={setOpen}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
            <TaskColumn
              title="Completed"
              tasks={completed}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
        {/* <div className="max-w-[1400px] mx-auto h-full p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
           
          </div>
        </div> */}

        <AddTaskModal open={open} setOpen={setOpen} addTasks={addTasks} />
      </section>
    </Layout>
  );
};

export default App;
