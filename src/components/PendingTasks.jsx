export const PendingTask = ({ pendingTasks, completedTasks }) => {

  return (
    <div className="pending-completed-tasks">
      <div>
        <h1>Pending Task</h1>
        <span>{pendingTasks}</span>
      </div>
      <div>
        <h1>Completed Task</h1>
        <span>{completedTasks}</span>
      </div>
    </div>
  )
}
