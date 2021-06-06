import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './redux/addTaskButtonSlice';
import { createTask, removeTask, loadTasks } from './redux/tasksSlice';

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Register from './components/Register';

function App() {

  const addTaskState = useSelector((state) => state.addTaskButton.value);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      dispatch(loadTasks(tasksFromServer));
    }
    getTasks();
  }, [dispatch]);

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
    dispatch(createTask(data));
  }

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    dispatch(removeTask(data._id));
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => dispatch(toggle())} showAdd={addTaskState} />
      <Route path='/' exact render={(props) => (
        <>
          {addTaskState && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Show')}
        </>
      )} />
      <Route path='/about' component={About} />
      <Route path='/register'>
        <Register />
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
