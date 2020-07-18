import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";

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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const generateRandonNumBtw = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
      return generateRandonNumBtw(min, max, exclude);
    } else {
      return randomNum;
    }
  };

  const trackGuessCount = (nextNumber) => {
    setPastGusses((curPassGusses) => [nextNumber, ...curPassGusses]);
  };

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      console.log("You got the correct number");
      props.onGameOver(pastGussess.length);
    }
  });
  const initialGuess = generateRandonNumBtw(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGussess, setPastGusses] = useState([initialGuess]);

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
      currentHigh.current = currentGuess - 1;
    }
    if (direction === "greater") {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandonNumBtw(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    trackGuessCount(nextNumber);
  };

  const rederListItem = (value) => {
   return  ( <View key={pastGussess.indexOf(value) + 1} style={{ flexDirection: "row" }}>
      <View style={styles.list}>
        <BodyText>#{pastGussess.length - pastGussess.indexOf(value)}</BodyText>
      </View>
      <View style={styles.list}>
        <BodyText>{value}</BodyText>
      </View>
    </View>
  )};
  
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
      <BodyText>
        Note: Please press Greater/Lower button if your number is greater/lower
        than displayed number.
        {"\n"}
      </BodyText>
      <BodyText>
        Below list contains previous gusses:
        {"\n"}
      </BodyText>
      <ScrollView>
        {pastGussess.map(guess => rederListItem(guess))}
      </ScrollView>
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
  list: {
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 5,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
});
