export type Priority = "low" | "medium" | "high";

export type FilterType = "all" | "completed" | "pending";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}

export interface TodoFormData {
  title: string;
  priority: Priority;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

export interface TodoFormProps {
  onAdd: (data: TodoFormData) => void;
}

export interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface TodoStatsProps {
  stats: TodoStats;
}
