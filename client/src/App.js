import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/addTaskButtonSlice";
import { createTask, removeTask, loadTasks } from "./redux/tasksSlice";
import {
  setUsername,
  setPassword,
  setConfirmedPassword,
  setUsernameError,
  setPasswordError,
  setMismatchedPasswordsError,
} from "./redux/registerSlice";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const addTaskState = useSelector((state) => state.addTaskButton.value);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      dispatch(loadTasks(tasksFromServer));
    };
    getTasks();
  }, [dispatch]);

  // Register User
  const registerUser = async (username, password, confirmedPassword) => {
    const res = await fetch("http://localhost:5000/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password, confirmedPassword }),
    });
    if (res.status === 400) {
      const data = await res.json();
      if (data.username) {
        dispatch(setUsernameError(true));
      } else {
        dispatch(setUsernameError(false));
      }
      if (data.password) {
        dispatch(setPasswordError(true));
      } else {
        dispatch(setPasswordError(false));
      }
      if (data.mismatched) {
        dispatch(setMismatchedPasswordsError(true));
      } else {
        dispatch(setMismatchedPasswordsError(false));
      }
    } else if (res.status === 201) {
      dispatch(setUsername(""));
      dispatch(setPassword(""));
      dispatch(setConfirmedPassword(""));
      dispatch(setUsernameError(false));
      dispatch(setPasswordError(false));
      dispatch(setMismatchedPasswordsError(false));
    }
  };

  // Login User
  const loginUser = async (username, password) => {
    const res = await fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
  };

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/v1/tasks");
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    dispatch(createTask(data));
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch(removeTask(data._id));
  };

  return (
    <Router>
      <div className="container">
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Header onAdd={() => dispatch(toggle())} showAdd={addTaskState} />
              {addTaskState && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} />
              ) : (
                "No Tasks to Show"
              )}
            </>
          )}
        />
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/login" exact>
          <Login onLogin={loginUser} />
        </Route>
        <Route path="/register" exact>
          <Register onRegister={registerUser} />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
