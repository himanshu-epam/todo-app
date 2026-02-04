import { useState } from "react";
import type { TodoItemProps } from "../types";

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(todo.title);

  const handleToggle = (): void => {
    onToggle(todo.id);
  };

  const handleDelete = (): void => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      onDelete(todo.id);
    }
  };

  const handleEditStart = (): void => {
    setIsEditing(true);
    setEditedTitle(todo.title);
  };

  const handleEditSave = (): void => {
    const trimmed = editedTitle.trim();

    if (!trimmed) {
      alert("Todo title cannot be empty!");
      return;
    }

    onEdit(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleEditCancel = (): void => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter") {
      handleEditSave();
    } else if (event.key === "Escape") {
      handleEditCancel();
    }
  };

  const getPriorityClass = (): string => {
    switch (todo.priority) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  };

  const getPriorityEmoji = (): string => {
    switch (todo.priority) {
      case "high":
        return "🔴";
      case "medium":
        return "🟡";
      case "low":
        return "🟢";
      default:
        return "";
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      <div className="todo-content">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              className="edit-input"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className="edit-buttons">
              <button className="save-button" onClick={handleEditSave}>
                Save
              </button>
              <button className="cancel-button" onClick={handleEditCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            <span
              className={`todo-title ${todo.completed ? "strikethrough" : ""}`}
            >
              {todo.title}
            </span>
          </div>
        )}
      </div>

      <span className={`priority-badge ${getPriorityClass()}`}>
        {getPriorityEmoji()} {todo.priority}
      </span>

      {!isEditing && (
        <div className="todo-actions">
          <button
            className="edit-button"
            onClick={handleEditStart}
            title="Edit todo"
          >
            ✏️
          </button>
          <button
            className="delete-button"
            onClick={handleDelete}
            title="Delete todo"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
