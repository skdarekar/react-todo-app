import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        },
        deleteTask: (state, action) => {
        },
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = todoSlice.actions

export default todoSlice.reducer