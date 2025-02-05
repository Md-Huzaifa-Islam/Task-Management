"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function getTasks() {
  const client = await clientPromise;
  const db = client.db("taskify");
  const tasks = await db.collection("tasks").find().toArray();

  return tasks.map((task) => ({
    ...task,
    _id: task._id.toString(),
    dueDate: task.dueDate
      ? new Date(task.dueDate).toISOString().split("T")[0]
      : "",
  }));
}

export async function addTask(title, description, dueDate) {
  const client = await clientPromise;
  const db = client.db("taskify");

  await db.collection("tasks").insertOne({
    title,
    description,
    dueDate: new Date(dueDate),
    completed: false,
  });
}

export async function deleteTask(id) {
  const client = await clientPromise;
  const db = client.db("taskify");

  await db.collection("tasks").deleteOne({ _id: new ObjectId(id) });
}

export async function markTaskAsCompleted(id) {
  const client = await clientPromise;
  const db = client.db("taskify");

  await db
    .collection("tasks")
    .updateOne({ _id: new ObjectId(id) }, { $set: { completed: true } });
}

export async function updateTask(id, updatedData) {
  const client = await clientPromise;
  const db = client.db("taskify");

  if (updatedData.dueDate) {
    updatedData.dueDate = new Date(updatedData.dueDate); // Ensure date format
  }

  await db
    .collection("tasks")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
}
