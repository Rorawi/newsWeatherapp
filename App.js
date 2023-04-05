import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./Components/SplashScreen";
import AppNavigations from "./navigation/AppNavigations";
import { Provider } from "react-redux";
import store from "./Store/store";


export default function App() {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(false);
    }, 2700);
    setShowScreen(true);
  }, []);
  return (
    <Provider store={store}>
    <View style={styles.container}>
      {showScreen ? <SplashScreen /> : <AppNavigations/>}
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
