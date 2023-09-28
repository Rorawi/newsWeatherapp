//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraCode from '../Components/Camera';

// create a component
const Camera = () => {
    return (
        <View style={styles.container}>
            <CameraCode />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // marginTop: 60
    },
})
//make this component available to the app
export default Camera;
