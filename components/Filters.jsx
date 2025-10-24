import { View } from "react-native";
import { styles } from "../assets/styles/styles";
import FilterBtn from "./FilterBtn";

const Filters = ({ filter, handleFilter }) => {
    return (
        <View
            style={{
                ...styles.filterContainer,
                marginHorizontal: "auto",
                marginVertical: 20,
            }}
        >
            <FilterBtn
                text={"All"}
                filter={filter}
                handleFilter={handleFilter}
            />
            <FilterBtn
                text={"Active"}
                filter={filter}
                handleFilter={handleFilter}
            />
            <FilterBtn
                text={"Done"}
                filter={filter}
                handleFilter={handleFilter}
            />
        </View>
    );
};

export default Filters;
