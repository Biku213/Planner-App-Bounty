import React, { useState, useCallback } from 'react';

const TaskItem = React.memo(({ task, index, handleToggleTask, handleEditTask, handleDeleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text" onClick={() => handleToggleTask(index)}>
        {task.text}
      </span>
      <div className="task-actions">
        {!task.completed ? (
          <button className="toggle-button" onClick={() => handleToggleTask(index)}>
            <i className="fas fa-check"></i>
          </button>
        ) : (
          <button className="toggle-button-completed" onClick={() => handleToggleTask(index)}>
            <i className="fas fa-check"></i>
          </button>
        )}
        <button className="edit-button" onClick={() => handleEditTask(index)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-button" onClick={() => handleDeleteTask(index)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
});

export default function TodoListWidget() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleTaskInputChange = useCallback((event) => {
    setTaskInput(event.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => {
        const updatedTasks = editIndex !== -1 ? [...prevTasks] : [{ text: taskInput, completed: false }, ...prevTasks];

        if (editIndex !== -1) {
          updatedTasks[editIndex] = { ...updatedTasks[editIndex], text: taskInput };
        }

        setTaskInput('');
        setEditIndex(-1); // Reset the editIndex to -1 when adding a new task

        return updatedTasks;
      });
    }
  }, [taskInput, editIndex]);

  const handleResetTasks = useCallback(() => {
    setTasks([]);
    setEditIndex(-1);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }, [handleAddTask]);

  const handleToggleTask = useCallback((index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        completed: !updatedTasks[index].completed,
      };

      return updatedTasks;
    });
  }, []);

  const handleDeleteTask = useCallback((index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  }, []);

  const handleEditTask = useCallback((index) => {
    const taskToEdit = tasks[index];
    setTaskInput(taskToEdit.text);
    setEditIndex(index);
  }, [tasks]);

  const handleToggleShowCompleted = useCallback(() => {
    setShowCompleted((prevShowCompleted) => !prevShowCompleted);
  }, []);
  const getTotalTaskCount = () => {
    return tasks.length;
  };
  const getCompletedTaskCount = () => {
    return tasks.filter((task) => task.completed).length;
  };

  const filteredTasks = showCompleted ? tasks : tasks.filter((task) => !task.completed);

  return (
    <div className="todo-list-widget">
      <h2>Todo List</h2>
     
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={handleTaskInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTask}>{editIndex !== -1 ? 'Update' : 'Add'}</button>
      </div>
      <p>Total Tasks: {getTotalTaskCount()}</p>
      <br></br>
        <p>Completed Tasks: {getCompletedTaskCount()}</p>
      
      <div className="toggle-completed-tasks">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleToggleShowCompleted}
          id="toggle-completed"
        />
        <label htmlFor="toggle-completed">Show Completed Tasks</label>
      </div>
      <div className="task-list-container">
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleToggleTask={handleToggleTask}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
      </div>
      <div className="reset-button-container">
        <button className="reset-button" onClick={handleResetTasks}>
          Reset Tasks
        </button>
      </div>
    </div>
  );
}
