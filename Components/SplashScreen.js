import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import welcome from '../assets/logo.gif'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
           <View style={{overflow:'hidden',width:200,height:200,borderRadius: 100}}>
           <Image source={welcome} style={styles.logo}/>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38C172',
        justifyContent: 'center',
        alignItems:'center',
      },

      logo: {
        width:200,
        height:200,
        borderRadius:100
      }
})

export default SplashScreen;
