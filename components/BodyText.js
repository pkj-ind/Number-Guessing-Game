import React from 'react'
import { StyleSheet, Text } from 'react-native'

const BodyText = (props) => <Text style={styles.text}>{props.children}</Text>

export default BodyText

const styles = StyleSheet.create({
    text:{
     fontFamily:"open-sans"
    }
})
