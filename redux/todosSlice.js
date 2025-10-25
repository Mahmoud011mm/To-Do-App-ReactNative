import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, title: "Task 1", description: "Go to the gym", status: "Active" },
        { id: 2, title: "Task 2", description: "Go to the gym", status: "Done" },
        { id: 3, title: "Task 3", description: "Go to the gym", status: "Done" },
        { id: 4, title: "Task 4", description: "Go to the gym", status: "Active" },
    ],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { title, description } = action.payload;
            const newTodo = {
                id: Date.now(),
                title,
                description,
                status: "Active",
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((t) => t.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find((t) => t.id === id);
            if (todo) {
                todo.status = todo.status === "Done" ? "Active" : "Done";
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
