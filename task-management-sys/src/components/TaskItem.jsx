import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task, onEdit }) => {
  console.log(task)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //<Button size="small" onClick={() => navigate(`/tasks/${task.id}`)}>View</Button>

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">{task.description}</Typography>
        <Typography variant="body2"><b>Due:</b> {task.dueDate}</Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={() => onEdit(task)}>Edit</Button>
        <Button size="small" color="error" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
