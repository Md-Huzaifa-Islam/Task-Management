"use client";
import { useState } from "react";
import { addTask } from "@/app/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TaskForm({ tasks, refetchTasks }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const dueDate = startDate;
    await addTask(title, description, dueDate);
    e.target.reset();
    setStartDate(new Date());
    refetchTasks();
  };

  return (
    <div className="rounded-lg border p-4 pb-8">
      <p className="pb-5 text-center text-2xl font-semibold text-blue-600">
        Add a new task
      </p>
      <form
        className="mx-auto flex max-w-2xl items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <Input type="text" id="text" name="title" placeholder="Title" />
        <Input
          type="text"
          id="text"
          name="description"
          placeholder="Description"
        />
        <DatePicker
          className="w-max rounded-md border"
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Button>Add Task</Button>
      </form>
    </div>
  );
}
