import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import News from '../screens/News'
import PreviewData from "../Components/Preview";

import { NavigationContainer } from "@react-navigation/native";
import Weather from "../screens/Weather";
import Map from "../screens/Map"
import Settings from "../screens/Settings"
import Analytics from "../screens/Analytics";
import Camera from '../screens/Camera';

const Stack = createStackNavigator()

const AppNavigations = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="news" component={News} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="camera" component={Camera} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="weather" component={Weather} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="map" component={Map} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="analytics" component={Analytics} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="previewdata" component={PreviewData} options={{
              headerShown: false
            }}/>
            <Stack.Screen name="settings" component={Settings} options={{
              headerShown: false
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default AppNavigations;
