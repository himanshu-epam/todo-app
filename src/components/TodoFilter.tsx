import type { TodoFilterProps, FilterType } from "../types";

function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  const filters: { value: FilterType; label: string; emoji: string }[] = [
    { value: "all", label: "All", emoji: "📋" },
    { value: "completed", label: "Completed", emoji: "✅" },
    { value: "pending", label: "Pending", emoji: "⏳" },
  ];

  return (
    <div className="todo-filter">
      <span className="filter-label">Filter:</span>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-button ${currentFilter === filter.value ? "active" : ""}`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.emoji} {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoFilter;
