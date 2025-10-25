import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todosSlice";

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <View
            style={{
                width: "90%",
                marginHorizontal: "auto",
                padding: 10,
            }}
        >
            <TouchableOpacity
                onPress={() => dispatch(toggleTodo(item.id))}
                activeOpacity={0.7}
            >
                <Text
                    style={[
                        { fontSize: 22, fontWeight: "bold" },
                        item.status === "Done" && styles.doneTodo,
                    ]}
                >
                    {item.title}
                </Text>
                <Text style={item.status === "Done" && styles.doneTodo}>
                    {item.description}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(deleteTodo(item.id))}
                style={{ marginTop: 8 }}
            >
                <Text style={{ color: "red" }}>Delete</Text>
            </TouchableOpacity>
            <View style={styles.dividerLine} />
        </View>
    );
};

export default TodoItem;
