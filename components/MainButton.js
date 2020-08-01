import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../Constants/Colors"

const MainButton = (props) => {
  let ButtonContainer = TouchableOpacity;
  //TouchanbleNativeFeedback gives ripple effect
  ButtonContainer = Platform.OS === "android" && Platform.Version > 21 && TouchableNativeFeedback;
  return (
    <View style={styles.buttonContainer}>
    <ButtonContainer onPress={props.onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </ButtonContainer>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer:{
   borderRadius:25,
   overflow:"hidden" // rippleeffects is align with button now, its overflowing is hidden from user now.
  },
  button: {
      backgroundColor: Colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius:25
  },
  buttonText: {
      color: "white",
      fontFamily:"open-sans",
      fontSize:18
  },
});
