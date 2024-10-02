import TasksFilter from "../TasksFilter/TasksFilter";
import PropTypes from "prop-types";

export default function Footer({ tasks, filter, setFilter, clearCompleted }) {
  return (
    <>
      <footer className="footer">
        <TasksFilter filter={filter} setFilter={setFilter} tasks={tasks} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  );
}

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};
