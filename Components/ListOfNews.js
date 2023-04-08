import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import Item from "./Item";
const ListOfNews = () => {
  const news = [
    {
      text: "Mr oh winding it enjoyed by between. The servants securing material goodness her.",
      id: 1,
      icon: "heart",
      img: require("../assets/images/bee.jpg"),
      topic: 'Bees are Bees'
    },
    {
      text: "Mr ah winding it enjoyed by between. The servants securing material goodness her. Saw themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.",
      id: 2,
      icon: "bookmark",
      img: require("../assets/images/apples.jpg"),
      topic: 'Apples plays a good role in our body'

    },
    {
      text: "Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.",
      id: 3,
      icon: "bookmark",
      img: require("../assets/images/bananas.jpg"),
      topic: 'Did you know bananas serves various functions?'

    },
    {
      text: "Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.",
      id: 4,
      icon: "bookmark",
      img: require("../assets/images/fern.jpg"),
      topic: 'Ferns are very beautiful!'
    },
    {
      text: "Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.",
      id: 5,
      icon: "bookmark",
      img: require("../assets/images/rose.jpg"),
      topic: 'Take a deep breath and take a good look at this flower... you\'ll feel okay.'
    },
  ];
  return (
    <FlatList
      style={styles.container}
      data={news}
      renderItem={({ item }) => {
        // console.log(item)
        return <Item text={item.text} icon={item.icon} img={item.img} topic={item.topic}/>;
      }}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 60
    
  },
});

export default ListOfNews;
