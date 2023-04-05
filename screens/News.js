import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomBar from "./BottomBar";
import ListOfNews from "../Components/ListOfNews";
import { useState } from "react";

const News = () => {
  const [date, setDate] = useState(new Date());
  //console.log(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <View style={styles.container}>
      {/* <Text>{date.toISOString().slice(0,10)}</Text> */}
      <Text style={styles.dateText}>
        {month}-{day}-{year}
      </Text>
      <Text style={styles.topic}>News Daily</Text>
      <ListOfNews />
      <View style={styles.endPoint}></View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },

  endPoint: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
  },

  topic: {
    fontSize: 20,
    fontWeight: 700,
  },

  dateText: {
    fontSize: 12,
    fontWeight: 300,
    alignSelf: "center",
  },
});

export default News;
