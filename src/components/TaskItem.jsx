export const TaskItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <div className="todoItem">
      <li>
        <span 
        className={` ${ (todo.done) ? "done" : ''}`}
        onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button className="delete-btn"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>

    </div>


  )
}
