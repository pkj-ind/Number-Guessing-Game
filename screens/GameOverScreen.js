import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over !!!</Text>
            <Text>Total number of Guesses: {props.attemptCount}</Text>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 10,
      }
})
