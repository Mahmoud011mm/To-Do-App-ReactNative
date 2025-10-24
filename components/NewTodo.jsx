import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";

const NewTodo = ({
    newTodo,
    handleTitle,
    handleDescription,
    handleAddTodo,
}) => {
    return (
        <View
            style={{
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TextInput
                style={styles.input}
                placeholder="Todo Title"
                value={newTodo.title}
                onChangeText={handleTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Todo Description"
                value={newTodo.description}
                onChangeText={handleDescription}
            />
            <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
                <Text style={styles.text}>add todo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NewTodo;
