import React, { useState } from 'react';


const TodoList = () => {
  const [tasks, setTasks] = useState(["Wash my hands", "Prepare Dinner", "Sleep"]);
  const [inputValue, setInputValue] = useState("What needs to be done?");
  const [updateFlag, setUpdateFlag] = useState(false);

  const handleFocus = (e) => {
    if (e.target === document.getElementById('task') && inputValue === "What needs to be done?") {
      setInputValue('');
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setInputValue("What needs to be done?");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && inputValue !== "What needs to be done?") {
      setTasks([...tasks, inputValue]);
      setInputValue("What needs to be done?");
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
    setUpdateFlag(!updateFlag);
  };

  const getContainerHeight = () => {
    const initialHeight = 170; 
    const taskHeight = 50;
    return initialHeight + tasks.length * taskHeight + "px";
  };

  return (
    <>
              <div className="container" style={{ height: getContainerHeight() }} onClick={handleFocus} onBlur={() => document.getElementById('task').focus()}>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      value={inputValue}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </form>
                <div className="task-list">
                  {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                      <div key={index} className="task-item">
                        {task}
                        <button className="delete-btn" onClick={() => handleDelete(index)}>X</button>
                      </div>
                    ))
                  ) : (
                    <div className="no-tasks">No hay tareas, añadir tareas</div>
                  )}
                </div>
                <div className="task-counter">
                  {tasks.length} Items left
                </div>
              </div>

              </>
  );
};




export default TodoList;
























