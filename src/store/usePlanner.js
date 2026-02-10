import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlanner = create(
  persist(
    (set) => ({
      tasks: [],
      addTasks: (payload) =>
        set((state) => ({
          tasks: [...state.tasks, payload],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((item) => item.id !== id),
        })),

      updateTask: (id, status) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => {
            if (task.id === id) {
              task.status = status;
            }
            return task;
          }),
        })),

      Deletealltask: () =>
        set(() => ({
          tasks: [],
        })),
    }),
    { name: "Planner" }, // it is used to set name in the localstorage
  ),
);
