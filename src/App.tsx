import type { Todo, TodoFormData, FilterType, TodoStats } from "./types";

import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStatsComponent from "./components/TodoStats";

import "./App.css";
import "./index.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React with TypeScript",
      completed: true,
      priority: "high",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Build a Todo App",
      completed: false,
      priority: "high",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Practice useState hook",
      completed: false,
      priority: "medium",
      createdAt: new Date(),
    },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos: Todo[] = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed === true;
      case "pending":
        return todo.completed === false;
      case "all":
      default:
        return true;
    }
  });

  const stats: TodoStats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    pending: todos.filter((todo) => !todo.completed).length,
  };

  const handleAddTodo = (formData: TodoFormData): void => {
    const newTodo: Todo = {
      id: Date.now(),
      title: formData.title,
      completed: false,
      priority: formData.priority,
      createdAt: new Date(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const handleToggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEditTodo = (id: number, newTitle: string): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (newFilter: FilterType): void => {
    setFilter(newFilter);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 My Todo App</h1>
        <p>Stay organized, get things done!</p>
      </header>

      <main className="app-main">
        <section className="section">
          <TodoForm onAdd={handleAddTodo} />
        </section>

        <section className="section">
          <TodoStatsComponent stats={stats} />
        </section>

        <section className="section">
          <TodoFilter
            currentFilter={filter}
            onFilterChange={handleFilterChange}
          />
        </section>

        <section className="section">
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with React + TypeScript 💙</p>
      </footer>
    </div>
  );
}

export default App;
