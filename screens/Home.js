import { View, Keyboard } from "react-native";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import TodoList from "../components/TodoList";
import Header from "../layout/Header";
import NewTodo from "../components/NewTodo";
import Filters from "../components/Filters";

const newTodoInitial = {
    id: 0,
    title: "",
    description: "",
    status: "Active",
};

const Home = () => {
    // ------------- Redux State -------------
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    // ------------- Local UI State -------------
    const [newTodo, setNewTodo] = useState(newTodoInitial);
    const [filter, setFilter] = useState("All");

    const displayedTodos = useMemo(() => {
        if (filter === "All") return todos;
        return todos.filter((t) => t.status === filter);
    }, [todos, filter]);

    // ------------- Handlers -------------
    const handleTitle = (text) => {
        setNewTodo({ ...newTodo, title: text });
    };
    const handleDescription = (text) => {
        setNewTodo({ ...newTodo, description: text });
    };
    const handleFilter = (value) => {
        setFilter(value);
    };
    const handleAddTodo = () => {
        if (!newTodo.title?.trim()) return;
        dispatch(addTodo({ title: newTodo.title.trim(), description: newTodo.description }));
        setNewTodo(newTodoInitial);
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
