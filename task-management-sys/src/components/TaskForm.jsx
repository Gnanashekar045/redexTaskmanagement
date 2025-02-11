import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = ({ existingTask, onClose }) => {
  const [task, setTask] = useState(existingTask || { title: "", description: "", dueDate: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField label="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <TextField label="Description" multiline rows={3} value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} required />
      <TextField type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} required />
      <Button type="submit" variant="contained">{existingTask ? "Update Task" : "Add Task"}</Button>
    </Box>
  );
};

export default TaskForm;
