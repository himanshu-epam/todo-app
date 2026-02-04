import { useState } from "react";
import type { TodoFormProps, Priority } from "../types";

function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState<string>("");

  const [priority, setPriority] = useState<Priority>("medium");

  const handleSubmit = (event: React.SubmitEvent): void => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert("Please enter a todo!");
      return;
    }

    onAdd({
      title: trimmedTitle,
      priority: priority,
    });

    setTitle("");
    setPriority("medium");
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setPriority(event.target.value as Priority);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={title}
          onChange={handleTitleChange}
          maxLength={100}
        />
      </div>

      <div className="form-group">
        <select
          className="priority-select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
