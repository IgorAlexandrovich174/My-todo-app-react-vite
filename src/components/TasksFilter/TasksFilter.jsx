import PropTypes from "prop-types";

export default function TasksFilter({ tasks, filter, setFilter }) {
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <span className="todo-count">{activeTasks} items left</span>
      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    </>
  );
}

TasksFilter.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
