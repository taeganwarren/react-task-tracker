import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './redux/addTaskButtonSlice';

import Task from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const addTaskState = useSelector((state) => state.addTaskButton.value);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

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



      <Header onAdd={() => dispatch(toggle())} showAdd={addTaskState} />

      <Route path='/' exact render={(props) => (
        <>
          {addTaskState && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Show')}
        </>
      )} />



      <Route path='/about' component={About} />

      <Route path='/login'>
        <Login onLogin={loginUser} />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      <Footer />

    </div>
    </Router>
  );
}

export default App;
