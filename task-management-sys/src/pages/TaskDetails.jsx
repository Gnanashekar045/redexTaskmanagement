import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks.find(t => t.id === parseInt(id)));
  const navigate = useNavigate();

  if (!task) {
    return <Typography variant="h6">Task not found.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="body2"><b>Due Date:</b> {task.dueDate}</Typography>
      <Button onClick={() => navigate("/tasks")} variant="contained" sx={{ mt: 2 }}>Back to Tasks</Button>
    </Container>
  );
};

export default TaskDetails;
