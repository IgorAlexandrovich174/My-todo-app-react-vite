import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addNewTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      editing: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function editTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editing: !task.editing } : task,
      ),
    );
  }

  function updateTask(id, newText) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const filteredTask = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <section className="todoapp">
      <NewTaskForm addNewTask={addNewTask} />
      <section className="main">
        <TaskList
          tasks={filteredTask}
          toggleTask={toggleTask}
          editTask={editTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <Footer
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
}
