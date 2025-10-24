import { View, Keyboard } from "react-native";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Header from "../layout/Header";
import NewTodo from "../components/NewTodo";
import Filters from "../components/Filters";

const todosInitial = [
    {
        id: 1,
        title: "Task 1",
        description: "Go to the gym",
        status: "Active",
    },
    {
        id: 2,
        title: "Task 2",
        description: "Go to the gym",
        status: "Done",
    },
    {
        id: 3,
        title: "Task 3",
        description: "Go to the gym",
        status: "Done",
    },
    {
        id: 4,
        title: "Task 4",
        description: "Go to the gym",
        status: "Active",
    },
];
const newTodoInitial = {
    id: 0,
    title: "",
    description: "",
    status: "Active",
};

const Home = () => {
    // ------------- States -------------
    const [todos, setTodos] = useState(todosInitial);
    const [newTodo, setNewTodo] = useState(newTodoInitial);
    const [filter, setFilter] = useState("All");
    const [displayedTodos, setDisplayedTodos] = useState(todosInitial);

    // ------------- Handlers -------------
    const handleTitle = (text) => {
        setNewTodo({ ...newTodo, title: text });
    };
    const handleDescription = (text) => {
        setNewTodo({ ...newTodo, description: text });
    };
    const handleFilter = (value) => {
        setFilter(value);
        if (value !== "All")
            setDisplayedTodos(todos.filter((item) => item.status === value));
        else setDisplayedTodos(todos);
    };
    const handleAddTodo = () => {
        const newTodos = [...todos, { ...newTodo, id: todos.length + 1 }];
        setTodos(newTodos);
        setNewTodo(newTodoInitial);
        setDisplayedTodos(newTodos);
        Keyboard.dismiss();
    };

    return (
        <View>
            <Header />
            <NewTodo
                newTodo={newTodo}
                handleTitle={handleTitle}
                handleDescription={handleDescription}
                handleAddTodo={handleAddTodo}
            />
            <Filters filter={filter} handleFilter={handleFilter} />
            <TodoList todos={displayedTodos} />
        </View>
    );
};

export default Home;
