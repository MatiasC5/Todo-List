import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask'
import { useTodo } from './hooks/useTodo'
import { PendingTask } from './components/PendingTasks'

export const App = () => {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo, pendingTasks,completedTasks } = useTodo()

  return (
    <>

      <div className='addTask-component'>
        <AddTask onNewTodo={handleAddTodo} />
      </div>
      <div className='pending-tasks'>
        <PendingTask  pendingTasks={pendingTasks} completedTasks={completedTasks}/>
      </div>
      <div className='todoList-component'>
        <TaskList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
      </div>
    </>
  )
}
