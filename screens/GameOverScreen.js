import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../Constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://www.scitecheuropa.eu/wp-content/uploads/2020/01/Mount-Everest.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Card style={styles.summaryContainer}>
        <TitleText>
          Hey ! Your number was:{" "}
          <Text style={styles.highlight}>{props.selectedNumber}</Text>
        </TitleText>

        <BodyText>
          Total number of guesses taken by Mobile is: {" "}
          <Text style={styles.highlight}>{props.attemptCount}</Text>
        </BodyText>
        <BodyText>The Game is Over !!!{"\n"}</BodyText>
        <MainButton onPress={props.onRestart}>Start Again</MainButton>  
        
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
  highlight: {
    color: Colors.primary,
    fontSize:20

  },
});
