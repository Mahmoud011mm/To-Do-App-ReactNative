import { View } from "react-native";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <Home />
                </View>
            </PersistGate>
        </Provider>
    );
};

export default App;
