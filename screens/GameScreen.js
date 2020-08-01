import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

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
  const [availableWidth, setAvailableWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableHeight, setAvailablHeight] = useState(
    Dimensions.get("window").height
  );

  const updateLayout = () => {
    setAvailableWidth(Dimensions.get("window").width);
    setAvailablHeight(Dimensions.get("window").height);
  };

  useEffect(() => {
    // if(availableHeight < availableWidth){
    //   console.log("I am in Landscape mode and available Height is: ",availableHeight)
    // }
    // else
    // console.log("I am in Potrait mode and available Height is: ",availableHeight)
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }),
    [updateLayout];

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
      // console.log("You got the correct number");
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

  // const rederListItem = (value) => {
  //   return (
  //     <View
  //       key={pastGussess.indexOf(value) + 1}
  //       style={{ flexDirection: "row" }}
  //     >
  //       <View style={styles.list}>
  //         <BodyText>
  //           #{pastGussess.length - pastGussess.indexOf(value)}
  //         </BodyText>
  //       </View>
  //       <View style={styles.list}>
  //         <BodyText>{value}</BodyText>
  //       </View>
  //     </View>
  //   );
  // };

  const rederListItem = (itemData) => (
    <View
      key={pastGussess.indexOf(itemData.item) + 1}
      style={{ flexDirection: "row" }}
    >
      <View style={styles.list}>
        <BodyText>
          Guess #{pastGussess.length - pastGussess.indexOf(itemData.item)}
        </BodyText>
      </View>
      <View style={styles.list}>
        <BodyText>{itemData.item}</BodyText>
      </View>
    </View>
  );

  let gameControl = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <FontAwesome5 name="less-than" size={24} color="white" />
          </MainButton>
          <BodyText>Less-than</BodyText>
        </View>
        <View>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <FontAwesome5 name="greater-than" size={24} color="white" />
          </MainButton>
          <BodyText>Greater</BodyText>
        </View>
      </Card>
    </>
  );

  if (availableHeight < 500) {
    gameControl = (
      <Card style={styles.buttonContainer}>
        <View>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <FontAwesome5 name="less-than" size={24} color="white" />
          </MainButton>
          <BodyText>Less-than</BodyText>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <FontAwesome5 name="greater-than" size={24} color="white" />
          </MainButton>
          <BodyText>Greater</BodyText>
        </View>
      </Card>
    );
  }
  return (
    <View style={styles.screen}>
      <BodyText>Computer's Guess:</BodyText>
      {gameControl}
      <BodyText>
        Hint: Please click appropriate button after comparing your chossen
        number with displayed number.
        {"\n"}
      </BodyText>
      {/* <ScrollView>
        {pastGussess.map(guess => rederListItem(guess))}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item) => item.toString()} // by default it takes accepts object with id,since it is just an array of number, use key Extractor to avoid Virtualized missing key
        data={pastGussess}
        renderItem={rederListItem.bind(this)}
        //renderItem={renderListItem.bind(this, pastGuesses.length)}
      />
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
    marginTop: Dimensions.get("window").height > 600 ? 15 : 5,
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
