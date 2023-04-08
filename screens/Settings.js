import React,{useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SettingsData from '../Components/SettingsData';
import BottomBar from './BottomBar';

const Settings = () => {
    const [date, setDate] = useState(new Date());
    //console.log(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    //console.log(date);
    return (
        <View style={styles.container}>
            {/* <Text>{date.toISOString().slice(0,10)}</Text> */}
      <Text style={styles.dateText}>
        {month}-{day}-{year}
      </Text>
            <SettingsData/>
            <BottomBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },

    dateText: {
        fontSize: 12,
        fontWeight: 300,
        alignSelf: "center",
      },
})

export default Settings;
