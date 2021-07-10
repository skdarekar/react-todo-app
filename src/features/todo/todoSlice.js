import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            // { summary: "This is todo1", priority: "high", createOn: "30thJuly2020", dueBy: "30thJuly2020" },
            // { summary: "This is todo2", priority: "low", createOn: "23thJuly2020", dueBy: "30thJuly2020" },
            // { summary: "This is todo3", priority: "medium", createOn: "21thJuly2020", dueBy: "30thJuly2020" },
            // { summary: "This is todo4", priority: "high", createOn: "11thJuly2020", dueBy: "30thJuly2020" },
            // { summary: "This is todo5", priority: "high", createOn: "30thJuly2020", dueBy: "30thJuly2020" },
        ]
    },
    reducers: {
        addTask: (state, action) => {
            const createdOn = new Date().toLocaleDateString();
            state.tasks = [...state.tasks, {...action.payload, createdOn }]
        },
        deleteTask: (state, action) => {

        },
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = todoSlice.actions

export default todoSlice.reducer