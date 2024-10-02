import Task from "../Task/Task";
import PropTypes from "prop-types";

export default function TaskList({
  tasks,
  toggleTask,
  editTask,
  updateTask,
  deleteTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={
            task.completed ? "completed" : task.editing ? "editing" : ""
          }
        >
          <Task
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
