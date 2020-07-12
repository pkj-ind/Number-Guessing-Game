import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../components/Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.summaryContainer}>
        <Text style={styles.text}>
          Hey ! Your number was: {props.selectedNumber}
          {"\n"}
        </Text>
        <Text>Number of Guesses taken by Mobile: {props.attemptCount}</Text>
        <Text>The Game is Over !!!{"\n"}</Text>
        <Button
          title="Start Again"
          onPress={props.onRestart}
          style={styles.button}
        />
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  summaryContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Cochin"
  },
});
