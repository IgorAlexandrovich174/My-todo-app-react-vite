import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default function Task({
  task,
  toggleTask,
  editTask,
  updateTask,
  deleteTask,
}) {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          // autoFocus
        />
        <label>
          <span className="description">{task.text}</span>
          <span className="created ">
            {formatDistanceToNow(task.created, {
              includeSeconds: true,
              addSuffix: true,
            })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={() => editTask(task.id)} />
        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(task.id)}
        />
      </div>

      {task.editing && (
        <input
          className="edit"
          type="text"
          value={task.text}
          onChange={(event) => updateTask(task.id, event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (task.text.trim() === "") return deleteTask(task.id);
              editTask(task.id);
            }
          }}
          // autoFocus
        />
      )}
    </>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
