import { createSlice, nanoid } from "@reduxjs/toolkit";

type IMenuState ={
    todo: {id: string, name: string}[]
}

const initialState: IMenuState = {
    todo: [{id: "1", name: "welcome"}]
}

export const menuSlice = createSlice({
   name: "tod",
   initialState,
   reducers:{
     addTodo: (state, actions)=>{
      const todo = {
         id: nanoid(),
         name: actions.payload
      }
        state.todo.push(todo)
     },

     removeTodo: (state, actions)=>{
        state.todo = state.todo.filter((todo)=> todo.id !== actions.payload)
     }
   }
})


export const { addTodo, removeTodo } = menuSlice.actions;
export default menuSlice.reducer;