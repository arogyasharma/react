import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Task({ task, index, toggleComplete, deleteTask }) {
  return (
    <div className={task.completed ? 'task done' : 'task'}>
      {task.text}
      <button onClick={() => toggleComplete(index)}>✔</button>
      <button onClick={() => deleteTask(index)}>✖</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  index: PropTypes.number,
  toggleComplete: PropTypes.func,
  deleteTask: PropTypes.func
};

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  return (
    <div className="tracker">
      <h2>Task Tracker</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <div>
        <p>✅ Completed: {completed} | 🕒 Pending: {pending}</p>
        {tasks.map((task, i) => (
          <Task
            key={i}
            task={task}
            index={i}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskTracker;


///css
.tracker {
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-family: sans-serif;
  }
  
  input {
    padding: 8px;
    width: 70%;
    margin-right: 5px;
  }
  
  button {
    padding: 5px 10px;
    margin-left: 4px;
  }
  
  .task {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  .done {
    text-decoration: line-through;
    color: gray;
  }
  