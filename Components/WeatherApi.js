import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import logo from "../assets/images/logo2.gif";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setData } from "../actions/Prop";

const WeatherApi = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const getInfo = async (city) => {
    setLoading(true);
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=585d4a04269c34cc7d11a057cfe5f80b`
    )
      //  awai fetch("https://api.openweathermap.org/data/2.5/weather?lat=5.608&lon=-0.21733&appid=585d4a04269c34cc7d11a057cfe5f80b")
      .then((response) => response.json())
      .then((json) => {
        setInfo([json]);
        setLoading(false);
        dispatch(setData([json]));
      });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    try {
      if (location) {
        let { latitude, longitude } = location.coords;
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
          .then((response) => response.json())
          .then((json) => {
            const cityData =
              json.address.city || json.address.town || json.address.village;
            getInfo(cityData);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }, [location]);

  const handleChange = (value) => {
    setInput(value);
  };

  const sendRequest = () => {
    getInfo(input);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Image source={logo} style={styles.logo} />
      ) : (
        <FlatList
          data={info}
          renderItem={({ item }) => {
            //console.log(item);
            let feelsLike = (item.main.temp - 273.15).toFixed(0);
            let des = item.weather[0].main;
            return (
              <View>
                <View style={styles.searchView}>
                  <TextInput
                    value={input}
                    onChangeText={handleChange}
                    style={styles.input}
                  />
                  <TouchableOpacity onPress={sendRequest}>
                    <Ionicons
                      name="search-outline"
                      size={24}
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.location}>
                  <Text style={styles.apiAns}>
                    <Entypo name="location-pin" size={24} color="green" />{" "}
                    {item.name}
                  </Text>
                </Text>

                <View style={styles.feelsLike}>
                 <View>
                 <Text style={styles.degreeText}>
                    {feelsLike}°<Text style={{ fontSize: 40 }}>C</Text>
                  </Text>
                  {/* <Text style={{fontSize:20,marginLeft:10,marginTop: 34}}>{des}</Text> */}
                 </View>

                  <View style={{flexDirection:'column', justifyContent:'flex-start',justifyContent:'flex-start'}}>
                     {des == "Rainy" || des == "Rain" ? (
                       <Ionicons name="rainy" size={64} color="gray" />
                       ) : des == "Clouds" ? (
                         <Entypo name="cloud" size={64} color="gray" />
                  ) : des == "Clear" ? (
                    <Ionicons name="sunny" size={64} color="green" />
                    ) : des == "Haze" ? (
                    <MaterialCommunityIcons
                      name="weather-fog"
                      size={64}
                      color="green"
                      />
                      ) : (
                        <Text>...loading</Text>
                        )}
                        <Text style={{fontSize:20,marginLeft:10,marginTop: 30}}>{des}</Text>
                  </View>
                 
                </View>
                <View style={styles.details}>
                  <View style={styles.other_descrip}>
                    <Text style={styles.text}>
                    <Entypo name="gauge" size={17} color="#414B5A"/>{"  "} 
                         Pressure: </Text>
                    <Text style={styles.text}>{item.main.pressure} pa</Text>
                  </View>
                  <View style={styles.other_descrip}>
                    <Text style={styles.text}>
                    <Entypo name="drop" size={17} color="#414B5A" /> {" "}
                      Humidity:  </Text>
                    <Text style={styles.text}>{item.main.humidity}</Text>
                  </View>
                  <View style={styles.other_descrip}>
                    <Text style={styles.text}>
                    <MaterialCommunityIcons name="weather-windy" size={17} color="#414B5A" /> {" "}
                      Wind Speed:  </Text>
                    <Text style={styles.text}>{item.wind.speed}</Text>
                  </View>
                  <View style={styles.other_descrip}>
                    <Text style={styles.text}>
                    <MaterialCommunityIcons name="weather-cloudy-alert" size={17} color="#414B5A" /> {" "}
                      Weather Description:  </Text>
                    <Text style={styles.text}>{item.weather[0].description}</Text>
                  </View>
                </View>
                {/* <TouchableOpacity>
                  <Ionicons name="refresh-sharp" size={24} color="green" />
                </TouchableOpacity> */}
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  list: {
    backgroundColor: "red",
    height: 50,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 70,
  },

  btn: {
    backgroundColor: "#fff",
  },

  location: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 23,
    fontWeight: "700",
    color: "green",
  },

  feelsLike: {
    width: 306,
    height: 161,
    backgroundColor: "#fff",
    shadowColor: "#6b6b6b",
    elevation: 4,
    borderRadius: 20,
    padding: 20,

    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    zIndex: 10,
    margin: 20,
  },

  degreeText: {
    fontSize: 80,
    fontWeight: 500,
    color:'#333'
  },

  logo: {
    marginTop: -100,
  },

  searchView: {
    flexDirection: "row",
    alignSelf: "center",
    marginRight: -20,
  },

  input: {
    flexDirection: "row",
    flex: 1,
    // borderWidth:1,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#6b6b6b",
    elevation: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 17,
  },

  searchIcon: {
    position: "relative",
    right: 40,
    bottom: -5,
    flexDirection: "row",
    alignSelf: "center",
    color: "green",
  },
  
  details: {
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  other_descrip: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginTop: 15
  },

  text: {
    fontSize: 15,
    fontWeight: 500,
    color: "#414B5A",
  }

});

export default WeatherApi;

// if (feelsLike <= 26) {
//   //console.log('It\'s cold here');
//   setIcon(false)
// }
// else{
//   //console.log('I\'s very hot!');
//   //setIcon(true)
// }
//console.log(item);
//console.log("clicked");
