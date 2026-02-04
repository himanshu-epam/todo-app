import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <div className="empty-icon">📝</div>
        <h3>No todos yet!</h3>
        <p>Add your first todo using the form above.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
