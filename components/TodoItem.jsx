import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";

const TodoItem = ({ item }) => {
    return (
        <View
            style={{
                width: "90%",
                marginHorizontal: "auto",
                padding: 10,
            }}
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
            <View style={styles.dividerLine} />
        </View>
    );
};

export default TodoItem;
