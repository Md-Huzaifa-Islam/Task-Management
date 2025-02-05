"use client";
import {
  deleteTask,
  getTasks,
  markTaskAsCompleted,
  updateTask,
} from "@/app/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "./ui/input";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";

export default function TaskList({ tasks, refetchTasks }) {
  const handleDelete = async (id) => {
    await deleteTask(id);
    refetchTasks();
  };

  const handleMarkTaskAsCompleted = async (id) => {
    await markTaskAsCompleted(id);
    refetchTasks();
  };

  const handleUpdateTask = async (id, updatedData) => {
    await updateTask(id, updatedData);
    refetchTasks();
  };

  return (
    <div className="mx-auto w-full border-black">
      <p className="pb-5 text-center text-2xl font-semibold text-blue-600">
        List of the Tasks
      </p>
      <div className="border p-2 pt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task?._id}>
                <TableCell>{task?.title}</TableCell>
                <TableCell>{task?.description}</TableCell>
                <TableCell>{task?.dueDate}</TableCell>

                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Edit this task</AlertDialogTitle>
                        <div className="grid grid-cols-1 gap-3">
                          <Input
                            type="text"
                            id="title"
                            defaultValue={task?.title}
                            name="title"
                            placeholder="Title"
                            onChange={(e) =>
                              handleUpdateTask(task._id, {
                                title: e.target.value,
                              })
                            }
                          />
                          <Input
                            type="text"
                            id="description"
                            defaultValue={task?.description}
                            name="description"
                            placeholder="Description"
                            onChange={(e) =>
                              handleUpdateTask(task._id, {
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleUpdateTask(task._id)}
                        >
                          Update
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    disabled={task?.completed}
                    onClick={() => handleMarkTaskAsCompleted(task?._id)}
                  >
                    {task?.completed ? "Done" : "Complete"}
                  </Button>
                </TableCell>
                <TableCell>
                  {" "}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">
                        <Trash2 />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your task.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(task._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
