import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import Colors from "../Constants/Colors"

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title} >{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
header:{
    width:'100%',
    height:90,
    paddingTop:36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems:"center",
    justifyContent:"center",
    borderBottomWidth:  Platform.OS === "android" ? 0 : 1,
    borderBottomColor: Platform.OS === "android" ? "transparent" : "#ccc"
},
title:{
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize:18,
}
})
