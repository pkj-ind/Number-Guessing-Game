import React, { createElement, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts} // this should be a function which should return promise
        onFinish={() => setDataLoaded(true)} //after finisihing startAsync function, this function will get executed.
        onError={(err) => console.log(err)}
      />
    );
  }

  const startGameHandler = (num) => {
    setuserNumber(num);
    setAttemptCount(0);
  };
  const gameOver = (numOfAttempts) => {
    setAttemptCount(numOfAttempts);
  };

  const reStartGame = () => {
    setuserNumber("");
    setAttemptCount(0);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver} />;
  }
  if (attemptCount > 0) {
    content = (
      <GameOverScreen
        attemptCount={attemptCount}
        onRestart={reStartGame}
        selectedNumber={userNumber}
      />
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
