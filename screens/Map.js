import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapData from '../Components/MapData';
import BottomBar from './BottomBar';

const Map = () => {
    return (
        <View style={styles.container}>
            <MapData/>
            <BottomBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // marginTop: 60
    },
})

export default Map;
