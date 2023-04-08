import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Item = ({text,icon,img,topic}) => {
    const navigation = useNavigation()
    const[length,setLength] = useState(false)
    const maxLength =  120

if(text.length <= maxLength){
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('previewdata',{
                text,icon,img,topic
            })
        }}>
        <View style={styles.itemView}>
            <Image source={img} style={styles.img}/>
      <View>
        <Text style={styles.topic}>{topic}</Text>
      <Text style={{maxWidth: 233,fontSize: 12}}>
           {text}
        </Text>
        <Entypo name={icon} size={20} color="green" style={styles.icon}/>
      </View>
    </View>
        </TouchableOpacity>
    </View>
    )

}
   
    return (
        // <View >
            <TouchableOpacity onPress={()=>{
                navigation.navigate('previewdata',{
                    text,icon,img,topic
                })
            }}
            style={styles.container}
            >
            <View style={styles.itemView}>
                <Image source={img} style={styles.img}/>
           <View>
            <Text style={styles.topic}>{topic}</Text>
           <Text style={styles.text}>
                {length? text: `${text.slice(0, maxLength)}...`}
            </Text>
            <Entypo name={icon} size={20} color="black" style={styles.icon}/>
           </View>
        </View>
            </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        borderRadius: 15,
        alignItems:'center',
        borderWidth: 1,
        borderColor:'#dddddd',
    },

    itemView: {
        flexDirection:'row',
        padding: 20,
        alignItems:'center',
    },

    img: {
        width: 93,
        height: 99,
        marginRight: 15,
        borderRadius: 9
    },

    text: {
        maxWidth: 233,
        alignSelf:'center',
        fontSize: 12
    },

    topic: {
        fontSize:14,
        fontWeight: 700,
        maxWidth: 233,

    },

    icon: {
        alignSelf:'flex-end'
    },
})

export default Item;