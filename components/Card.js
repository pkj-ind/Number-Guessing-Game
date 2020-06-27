import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection : 'row', 
        justifyContent:"space-between",
        width:"100%"  
    },
    card:{
      shadowColor:"black",
      shadowOffset:{width:0, height: 2},
      shadowRadius:6,
      shadowOpacity:0.3,
      backgroundColor:"white",
      elevation: 8,
      padding:20,
      borderRadius: 10
    },
})
