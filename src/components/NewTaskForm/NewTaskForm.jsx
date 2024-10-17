import { useState } from "react";
import PropTypes from "prop-types";
import { convertMilliSec } from "../../utils/convertMilliSec.js";

export default function NewTaskForm({ addNewTask }) {
  const [taskText, setTaskText] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [error, setError] = useState("");

  function validationForm(minutes, seconds) {
    let error = "";
    if (minutes < 0) {
      error += "Минуты должны быть положительным числом. \n";
    }
    if (seconds < 0) {
      error += "Секунды должны быть положительным числом. \n";
    }
    if (minutes <= 0 && seconds <= 0) {
      error +=
        "Таймер не может начать работать с нулевыми значениями (или отрицательными) в минутах и секундах. \n";
    }
    if (seconds > 60) {
      error += "Невозможно указать более 60 секунд. \n";
    }
    if (minutes === "" || seconds === "") {
      error += "Укажите время на выполнение задачи \n";
    }
    if (error) {
      setError(error);
      return false;
    }
    return true;
  }

  function clearForm() {
    setTaskText("");
    setMinutes("");
    setSeconds("");
    setError("");
  }

  function handleSubmit(event) {
    const parseMinutes = Number(minutes);
    const parseSeconds = Number(seconds);
    event.preventDefault();
    if (!validationForm(parseMinutes, parseSeconds)) return;
    addNewTask(taskText, convertMilliSec(minutes, seconds));
    clearForm();
  }

  return (
    <>
      <header className="header">
        <h1>My todos</h1>
        <form className="new-todo-form" action="" onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            value={seconds}
            onChange={(event) => setSeconds(event.target.value)}
          />
          {error && <p>{error}</p>}
          <button style={{ display: "none" }}>submit</button>
        </form>
      </header>
    </>
  );
}

NewTaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};
