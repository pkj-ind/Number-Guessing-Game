import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../Constants/Colors";
import Input from "../components/Input";
import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"
import NumberContainer from "../components/NumberContainer"
import DefaultStyles from "../Constants/default-styles"

const StartGameScreen = (props) => {
  const [userInput, setUserInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const InputHandler = (inputText) => {
    setUserInput(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = (e) => {
    setUserInput("");
  };

  const confirmInputHandler = () => {
    let choosenNumber = parseInt(userInput);
    if (isNaN(choosenNumber) || choosenNumber <= 0) {
      setEnteredValue('');
      setConfirmed(false);
      Alert.alert("Invalid Number", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
    return;
    }
    setUserInput("");
    setEnteredValue(choosenNumber);
    setConfirmed(true);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
        <Card style={styles.summaryContainer}>
          <Text>You selected:</Text>
          <NumberContainer>{enteredValue}</NumberContainer>
          <Button title="START GAME" onPress={()=>props.onStartGame(enteredValue)} />
        </Card>
      ); 
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <Text style={DefaultStyles.bodyText}>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            autoCapitalize="none"
            value={userInput}
            onChangeText={InputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={(e) => {
                  resetInputHandler(e);
                }}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
