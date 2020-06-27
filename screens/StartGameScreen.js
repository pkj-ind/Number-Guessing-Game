import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Card from "../components/Card"

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                   <View style={styles.button}>
                    <Button title="Reset" onPress={()=>{}}/>
                   </View> 
                   <View style={styles.button}>
                    <Button title="Confirm" onPress={()=>{}}/>
                   </View> 
                </View>
           </Card>
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
      alignItems:"center"
     },
    title:{
     fontSize: 20,
     marginVertical:10
    },
    button:{
        width:100
    }

})
