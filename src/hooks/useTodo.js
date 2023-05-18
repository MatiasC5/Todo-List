import { useEffect, useReducer } from "react"
import { todoReducer } from "../components/todoReducer"

export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos'))
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTasks: todos.filter(todo => !todo.done).length,
        completedTasks: todos.filter(todo => todo.done).length
    }
}
