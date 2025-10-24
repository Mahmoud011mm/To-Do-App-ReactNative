import { Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";

const FilterBtn = ({ text, filter, handleFilter }) => {
    return (
        <TouchableOpacity
            style={filter == text ? styles.activeFilterBtn : styles.filterBtn}
            onPress={() => handleFilter(text)}
        >
            <Text
                style={
                    filter == text ? styles.activeFilterText : styles.filterText
                }
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default FilterBtn;
