import React, { createElement, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen"

export default function App() {
  const [userNumber, setuserNumber] = useState("");
  const [attemptCount,setAttemptCount] = useState(0);

  const startGameHandler = (num) => {
    setuserNumber(num);
    setAttemptCount(0);
  };
  const gameOver =(numOfAttempts) =>{
    setAttemptCount(numOfAttempts);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver}/>;
  }
  if (attemptCount > 0){
    content = <GameOverScreen attemptCount={attemptCount}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
