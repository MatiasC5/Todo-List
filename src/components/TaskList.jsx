import { TaskItem } from './TaskItem'

export const TaskList = ({todos = [], handleDeleteTodo, handleToggleTodo}) => {
  return (

    <ul>
       {
      todos.map(todo => (
        <TaskItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}  handleToggleTodo={handleToggleTodo}/>
      ))
    }
    </ul>
 

  )
  
}
