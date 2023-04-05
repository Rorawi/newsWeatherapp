import React,{useEffect} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import AnalyticsItem from "./AnalyticsItem";

const AnalyticsData = () => {
  const data = useSelector((state) => state.weatherData);
  //console.log(data);

  return (
      <FlatList
        data={data}
        renderItem={({ item }) =>{
            let des = item.weather[0].main;
            let feelsLike = (item.main.feels_like - 273.15).toFixed(0);

            
            return (
              <View style={styles.container}>
            <AnalyticsItem 
              feel = {feelsLike}
              des = {des}
              name={item.name}
              country = {item.sys.country}
              />
           
          </View>
        )}}
        />
        );
      };
      
      const styles = StyleSheet.create({
        container:{
          flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      
      
    });
    
    export default AnalyticsData;
    
    //   let sunrise =  new Date(item.sys.sunrise * 1000).toLocaleTimeString()
    //   let sunset =  new Date(item.sys.sunset * 1000).toLocaleTimeString()
    //  console.log(sunrise,sunset);