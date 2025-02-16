import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar'
import UserList from './components/userList';


function App() {
  return (
    <div>
      <h1>User List</h1>
      <SearchBar/>
      <UserList/>
    </div>
  );
}

export default App;
