"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useEffect, useState } from "react";
import { getTasks } from "./actions";

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
    <div className="grid gap-10 rounded-xl border-2 p-16 shadow-xl shadow-blue-600">
      <TaskForm tasks={tasks} refetchTasks={fetchTasks} />
      <TaskList tasks={tasks} refetchTasks={fetchTasks} />
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
}
