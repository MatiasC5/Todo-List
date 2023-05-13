



export const PendingTask = ({ pendingTasks, completedTasks }) => {


  return (
    <>
      <div>
        <h1>PendingTask</h1>
        <span>{pendingTasks }</span>
      </div>
      <div>
        <h1>Completed Task</h1>
        <span>{completedTasks}</span>
      </div>
    </>

  )
}
