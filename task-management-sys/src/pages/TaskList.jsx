import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Typography } from "@mui/material";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setIsFormOpen(true);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>Your Tasks</Typography>
      
      <Button variant="contained" onClick={() => { 
        setIsFormOpen(true);
        setTaskToEdit(null); 
      }}>
        Add Task
      </Button>

      {isFormOpen && <TaskForm existingTask={taskToEdit} onClose={() => setIsFormOpen(false)} />}

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={handleEdit} />
        ))
      ) : (
        <Typography sx={{ mt: 2 }}>No tasks found.</Typography>
      )}
    </Container>
  );
};

export default TaskList;
