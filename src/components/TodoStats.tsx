import type { TodoStatsProps } from "../types";

function TodoStats({ stats }: TodoStatsProps) {
  const completionPercentage =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="todo-stats">
      <div className="stats-cards">
        <div className="stat-card total">
          <span className="stat-icon">📋</span>
          <div className="stat-info">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>

        <div className="stat-card completed">
          <span className="stat-icon">✅</span>
          <div className="stat-info">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="stat-card pending">
          <span className="stat-icon">⏳</span>
          <div className="stat-info">
            <span className="stat-number">{stats.pending}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="progress-text">
            {completionPercentage}% Complete
          </span>
        </div>
      )}
    </div>
  );
}

export default TodoStats;
