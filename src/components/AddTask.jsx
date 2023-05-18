import { useForm } from '../hooks/useForm'
import '../App.css'

export const AddTask = ({ onNewTodo }) => {

    const { description, handleChangeForm, handleResetForm } = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 1) return
        const newTodo = {
            "description": description,
            "done": false,
            "id": new Date().getTime()
        }
        onNewTodo(newTodo)
        handleResetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='addTask-input'
                type='text'
                placeholder='Add todo...'
                onChange={handleChangeForm}
                value={description}
                name='description'
                autoComplete='off'
            />
            <button type='submit' className='addTask-btn'>Add</button>
        </form>
    )
}



















// import { useForm } from '../hooks/useForm'
// import '../App.css'



// export const AddTask = ({onNewTodo}) => {

//     const { description , handleResetForm, handleChangeForm} = useForm({
//         description: ''
//     })


//     const handleSubmit = e => {
//         e.preventDefault()
//         if(description.length <=1) return
//         const newTodo = {
//             description,
//             id: new Date().getTime(),
//             done: false,
//         }
//         onNewTodo(newTodo)
//         handleResetForm()
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//             type='text'
//                 placeholder='Que hay que hacer?'
//                 className='addTask-input'
//                 name='description'
//                 onChange={handleChangeForm}
//                 value={description}
//             />
//         </form>
//     )
// }
