import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => {
          navigation.navigate("weather");
        }}
      >
        <MaterialCommunityIcons
          name="weather-pouring"
          size={24}
          color="green"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => {
          navigation.navigate("analytics");
        }}
      >
        {/* <Ionicons name="analytics-sharp" size={24} color="green"/> */}
        <MaterialIcons name="healing" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => {
          navigation.navigate("news");
        }}
      >
        <FontAwesome name="newspaper-o" size={23} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => {
          navigation.navigate("map");
        }}
      >
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={24}
          color="green"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    paddingHorizontal: 10,
    width: 400,
    borderRadius: 30,
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    shadowColor: "#000",
    elevation: 5,
  },
  bottomBarButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomBar;
