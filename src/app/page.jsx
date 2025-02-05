"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useEffect, useState } from "react";
import { getTasks } from "./actions";
import TaskCards from "@/components/TaskCards";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tasks function
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch tasks on initial load
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="grid gap-10 rounded-xl border-2 p-10 shadow-xl shadow-blue-600 lg:p-16">
      <TaskForm tasks={tasks} refetchTasks={fetchTasks} />
      <div className="hidden sm:block">
        <TaskList tasks={tasks} refetchTasks={fetchTasks} />
      </div>
      <div className="sm:hidden">
        <TaskCards tasks={tasks} refetchTasks={fetchTasks} />
      </div>
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
}
