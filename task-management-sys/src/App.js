
import Auth from './pages/auth';
import TaskList from './pages/TaskList'
const App = () => {
  return <>
    <div style={{ marginBottom: "40px" }}>
      <Auth/>
    </div>
    <div>
      <TaskList />
    </div>
  </>
}

export default App