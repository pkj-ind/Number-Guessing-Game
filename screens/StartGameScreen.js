import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={()=>{}}/>
                    <Button title="Confirm" onPress={()=>{}}/>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        padding:10
    },
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
    title:{
     fontSize: 20,
     marginVertical:10
    }

})
