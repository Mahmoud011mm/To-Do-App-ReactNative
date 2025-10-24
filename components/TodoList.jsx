import { FlatList } from "react-native";
import { styles } from "../assets/styles/styles";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <FlatList
            style={styles.todosContainer}
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default TodoList;
