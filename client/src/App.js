import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Task from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

// TODO: Make sure all validation is done server side
function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  // Register User
  const registerUser = async (username, password) => {
    const res = await fetch('http://localhost:5000/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
  }

  // Login User
  const loginUser = async (username, password) => {
    const res = await fetch('http://localhost:5000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
  }

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/v1/tasks');
    const data = await res.json();
    return data;
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/api/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: 'DELETE'
    });
    setTasks(tasks.filter((task) => task._id !== id));
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <Route path='/' exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Show')}
        </>
      )} />
      <Route path='/about' component={About} />
      <Route path='/login'>
        <Login onLogin={loginUser} />
      </Route>
      <Route path='/register'>
        <Register onRegister={registerUser} />
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
