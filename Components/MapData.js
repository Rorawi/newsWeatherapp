import React,{useState,useEffect} from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';

const MapData = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

if (!location) {
  return null;
}
  
  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.container}>
    <MapView style={styles.map}
     initialRegion={{
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
     >
       <Marker coordinate={{ latitude, longitude }} style={styles.bounce}/>
       </MapView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  bounce: {
    backgroundColor:'green'
  }
});

export default MapData;

