import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import clear from "../assets/images/clear.png";
import rain from "../assets/images/rain.png";
import snow from "../assets/images/snow.png";
import haze from "../assets/images/haze.png";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AnalyticsItem = ({ feel, des, name, country }) => {
    const navigation = useNavigation()
  const clearActivities = [
    "have a picnic in the park or backyard.",
    "go for a bike ride or a hike.",
    "play outdoor sports, such as soccer or frisbee.",
    "have a water balloon or water gun fight.",
    "take a nature walk and look for interesting plants and animals.",
    "have a scavenger hunt.",
    "set up an outdoor obstacle course or relay race.",
    "go camping in the backyard.",
    "have a barbecue or cookout with family and friends.",
  ];

  const clearClothes = [
    "You may want to wear lighter clothing such as shorts, t-shirts, and sandals.",
    "You may want to wear long pants, a sweater, and closed-toe shoes.",
  ];

  const rainyPrecautions = [
    "Wear appropriate clothing: Wear a raincoat or waterproof jacket, pants, and shoes to keep yourself dry.",
    "Use an umbrella: Use an umbrella to protect yourself from the rain.",
    "Avoid standing water: Avoid standing water or puddles, as they can be deeper than they appear and could lead to slipping or falling.",
    "Stay indoors: If the rain is too heavy, it may be best to stay indoors until it subsides.",
    "Be cautious while driving: If you need to drive, slow down and maintain a safe distance from the vehicle in front of you, as the roads may be slippery",
  ];

  const rainyActivities = ["Play in the puddles", "Indoor games"];

  const cloudyActivities = [
    "You can go for a walk",
    "It's also a good opportunity to take some moody and atmospheric photos",
    "Do some indoor activities like reading, cooking or playing board games until it subsides.",
  ];

  const snowyPrecautions = [
    "Wear appropriate clothing: you can dress warmly and consider wearing waterproof boots and a coat.",
    "you may need to shovel or clear a path to walk or drive.",
  ];
  const snowyActivities = [
    "You can also enjoy outdoor winter activities such as skiing, snowboarding, ice skating",
    "building a snowman",
  ];

  const hazePrecautions = [
    "Stay indoors: If the air quality is poor due to haze, it is best to stay indoors as much as possible to avoid prolonged exposure to pollutants in the air.",
    "Use air purifiers: If you have an air purifier at home, use it to filter out pollutants and improve indoor air quality.",
    "Close windows and doors: Keep your windows and doors closed to prevent outdoor pollutants from entering your home.",
    "Limit outdoor activities: Avoid engaging in outdoor activities, especially strenuous activities, during haze weather as it may put additional stress on your respiratory system.",
    "Stay hydrated: Drink plenty of water to keep yourself hydrated, as haze can cause dryness in the respiratory system.",
    "Use protective gear: If you need to be outdoors, consider wearing a mask or a respirator to filter out airborne particles and protect your respiratory system.",
    "Seek medical attention if needed: If you experience respiratory discomfort, such as coughing, difficulty breathing, or chest pain, seek medical attention promptly."
  ]
  const randomClearActivities =
    clearActivities[Math.floor(Math.random() * clearActivities.length)];
  //console.log(randomActivities);
  const randomClearClothes =
    clearClothes[Math.floor(Math.random() * clearClothes.length)];
  const randomrainyPrecautions =
    rainyPrecautions[Math.floor(Math.random() * rainyPrecautions.length)];
  const randomrainyActivities =
    rainyActivities[Math.floor(Math.random() * rainyActivities.length)];
  const randomsnowyPrecautions =
    snowyPrecautions[Math.floor(Math.random() * snowyPrecautions.length)];
  const randomsnowyActivities =
    snowyActivities[Math.floor(Math.random() * snowyActivities.length)];
  const randomcloudyActivities =
    cloudyActivities[Math.floor(Math.random() * cloudyActivities.length)];
  const randomhazePrecautions =
    hazePrecautions[Math.floor(Math.random() * hazePrecautions.length)];
  //console.log(randomActivities);

  const Clear = () => {
    return (
      <View style={styles.container}>
        <Image source={clear} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.weatherCondition}>It's Clear </Text>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('weather')
          }}>
          <Text style={styles.feel}>Feels like {feel}°C</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.activity, styles.text]}>
          *You can {randomClearActivities}
        </Text>
        <Text style={styles.text}>*{randomClearClothes}</Text>
      </View>
    );
  };

  const Clouds = () => {
    return (
      <View style={styles.container}>
        <Image source={rain} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.weatherCondition}>It's Cloudy </Text>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('weather')
          }}>
          <Text style={styles.feel}>Feels like {feel}°C</Text>
          </TouchableOpacity>  
                </View>
        <Text style={[styles.activity, styles.text]}>
        *{randomcloudyActivities}
        </Text>
        <Text style={styles.text}>*{randomrainyPrecautions}</Text>
      </View>
    );
  };

  const Rain = () => {
    return (
      <View style={styles.container}>
        <Image source={rain} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.weatherCondition}>It's Rainy </Text>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('weather')
          }}>
          <Text style={styles.feel}>Feels like {feel}°C</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.activity, styles.text]}>
          *You can {randomrainyActivities}
        </Text>
        <Text style={styles.text}>*{randomrainyPrecautions}</Text>
      </View>
    );
  };


  const Haze = () => {
    return (
      <View style={styles.container}>
        <Image source={haze} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.weatherCondition}>It's Hazy </Text>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('weather')
          }}>
          <Text style={styles.feel}>Feels like {feel}°C</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>*{randomhazePrecautions}</Text>
      </View>
    );
  };

  const Snowy = () => {
    return (
      <View style={styles.container}>
        <Image source={snow} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.weatherCondition}>It's Snowy </Text>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('weather')
          }}>
          <Text style={styles.feel}>Feels like {feel}°C</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.activity, styles.text]}>
          *You can {randomsnowyActivities}
        </Text>
        <Text style={styles.text}>*{randomsnowyPrecautions}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.location}>
        {name} , {country}
      </Text>
      <View>
        {des == "Clear" ? (
          <View>{Clear()}</View>
        ) : des == "Clouds" ? (
          <View style={styles.View}>{Clouds()}</View>
        ) : des == "Rainy" ||des == "Rain" ? (
          <View>{Rain()}</View>
        ) : des == "Snowy" ? (
          <View>{Snowy()}</View>
        ) : des == "Haze" ? (
          <View>{Haze()}</View>
        ) : <Text>...loading</Text>}
      </View>
      <Text style={styles.constantText}>Have an awesome time!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  img: {
    width: "100%",
    height: 220,
    alignSelf: "center",
  },

  weatherCondition: {
    fontWeight: 700,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 10,
  },

  text: {
    maxWidth: 340,
    textAlign: "left",
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },

  constantText: {
    marginTop: 20,
    alignSelf: "center",
    color: "green",
    fontSize: 17,
    fontWeight: 600,
  },

  location: {
    fontSize: 13,
    fontWeight: 600,
    alignSelf: "center",
    color: "#333",
  },

  feel: {
    backgroundColor: "#fff",
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 13,
    alignSelf: "center",
    borderRadius: 35,
    fontSize: 10,
    shadowColor: "#383838",
    elevation: 2,
  },
});

export default AnalyticsItem;
