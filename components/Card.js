import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Card = () => {
    return (
        <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={()=>{}}/>
                    <Button title="Confirm" onPress={()=>{}}/>
                </View>
            </View>
    )
}

export default Card

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection : 'row', 
        justifyContent:"space-between",
        width:"100%"  
    },
    inputContainer:{
      width:300,
      maxWidth:'80%',
      alignItems:"center",
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
