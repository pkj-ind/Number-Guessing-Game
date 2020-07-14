import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../components/Card";
import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"


const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.summaryContainer}>
        <TitleText>
          Hey ! Your number was: {props.selectedNumber}
          {"\n"}
        </TitleText>
        <BodyText>Number of Guesses taken by Mobile: {props.attemptCount}</BodyText>
        <BodyText>The Game is Over !!!{"\n"}</BodyText>
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
    marginTop: 20,
    alignItems: "center",
  }
});
