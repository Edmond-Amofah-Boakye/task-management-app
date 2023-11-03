import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/Store'
import { addTodo, removeTodo } from '../../features/todo/Todos'
import { useGetTasksQuery } from '../../features/api/TaskAPI'

const General = () => {
  const [first, setfirst] = useState("")
  const dispatch = useDispatch()
  const todo = useSelector((state: RootState)=>state.todo.todo)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    dispatch(addTodo(first))
}

const {data: tasks, isLoading } = useGetTasksQuery(null)

isLoading && <p>Loading....</p>
console.log(tasks);

  
  return (
    <div>
      {todo.map((todo)=>(
        <div key={todo.id}>
          <div>{todo.name}</div>
          <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove todo</button>
        </div>
        
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo' onChange={((e)=>setfirst(e.target.value))}/>
        <button>ADD</button>
      </form>
    </div>
  )
}

export default General