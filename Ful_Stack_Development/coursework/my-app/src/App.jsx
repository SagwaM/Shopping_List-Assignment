import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import './styles/App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const SavedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(SavedTasks) setTasks(SavedTasks);
    
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {id: Date.now(), text, completed: false};
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function toggleComplete(id) {
    setTasks(
      tasks.map(task => 
        task.id === id 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
  }


  return (
  <div className='container'>
    <h1>Task Manager</h1>
    <TaskInput addTask={addTask} />
    <TaskList 
      tasks={tasks} 
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
    </div>
  )
}

export default App