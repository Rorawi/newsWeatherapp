import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, AntDesign,MaterialCommunityIcons,Feather } from "@expo/vector-icons";
import BottomBar from "../screens/BottomBar";

const Preview = ({ route }) => {
  const [like, setLike] = useState(true);
  const [count, setCount] = useState(0);
  const { text, img, topic } = route.params;
  //console.log(route.params);
  const addLike = () => {
    if (like) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.previewBox}>
          <Image source={img} style={styles.img} />
          <View style={styles.bottomInfo}>
            <Text style={styles.topic}>{topic}</Text>
            <Text style={styles.text}>{text}</Text>
          
              <View style={{ flexDirection: "row", alignItems: "center" ,marginTop: 20,justifyContent:'space-around'}}>
               <View style={{ flexDirection: "row", alignItems: "center" ,marginTop: 20,alignSelf:'center'}}>
               <TouchableOpacity onPress={addLike}>
                  {like ? (
                    <AntDesign name="hearto" size={24} color="black" />
                  ) : (
                    <Entypo name="heart" size={24} color="hotpink" />
                  )}
                </TouchableOpacity>
                <Text style={styles.score}>
                  {count}
                </Text>
               </View>
              <TouchableOpacity style={{alignSelf:'flex-end'}}>
              <MaterialCommunityIcons name="comment-text-outline" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity style={{alignSelf:'flex-end'}}>
              <Feather name="share-2" size={24} color="green" />
              </TouchableOpacity>
              </View>
            
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 4,
  },

  previewBox: {
    // marginTop: 45,
    // height: 530,
    width: 360,
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#fff",
    // shadowColor:'#000',
    // elevation: 4
  },

  bottomInfo: {
    padding: 20,
  },

  img: {
    width: "100%",
    height: 220,
    alignSelf: "center",
  },

  topic: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },

  text: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
  },

  score: {
    fontSize: 20,
    marginLeft: 10,
  },

  reactions: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
});

export default Preview;
