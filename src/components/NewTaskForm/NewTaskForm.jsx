import { useState } from "react";
import PropTypes from "prop-types";

export default function NewTaskForm({ addNewTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addNewTask(taskText);
    setTaskText("");
  }

  return (
    <header className="header">
      <h1>My todos</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={taskText}
          onChange={(event) => {
            setTaskText(event.target.value);
          }}
          // autoFocus
        />
      </form>
    </header>
  );
}

NewTaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};
