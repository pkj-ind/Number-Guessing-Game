import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from "../components/Card"

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            < Card />
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
    
    title:{
     fontSize: 20,
     marginVertical:10
    }

})
