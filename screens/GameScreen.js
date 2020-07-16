import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

// icon source: https://icons.expo.fyi/
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const GameScreen = (props) => {
  const [numOfGussess, setNumOfGusses] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const trackGuessCount = () => {
    setNumOfGusses((numOfGussess) => numOfGussess + 1);
  };

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      console.log("You got the correct number");
      props.onGameOver(numOfGussess);
    }
  });

  const generateRandonNumBtw = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
      console.log("min,max,exclude", min, max, exclude);
      return generateRandonNumBtw(min, max, exclude);
    } else {
      return randomNum;
    }
  };

  const [currentGuess, setCurrentGuess] = useState(
    generateRandonNumBtw(1, 100, props.userChoice)
  );

  const nextGuessHandler = (direction) => {
    // console.log("Current direction is", direction);
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie !", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }
    if (direction === "greater") {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandonNumBtw(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    console.log("Next Number is :", nextNumber);
    setCurrentGuess(nextNumber);
    trackGuessCount();
  };

  return (
    <View style={styles.screen}>
      <BodyText>Computer's Guess:</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <FontAwesome5 name="less-than" size={24} color="white" />
        </MainButton>

        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <FontAwesome5 name="greater-than" size={24} color="white" />
        </MainButton>
      </Card>
      <BodyText>Note: Please press Greater/Lower button if your number is greater/lower than displayed number.</BodyText>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    maxWidth: "80%",
  },
});
