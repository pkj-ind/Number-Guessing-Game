import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "../Constants/Colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }),
      }}
    >
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize: 18,
  },
});
