import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useFonts } from "expo-font";

function LoadingScreen() {
  const [fontloaded] = useFonts({
    FreckleFace: require("../assets/fonts/FreckleFace-Regular.ttf"),
  });
  return (
    <View style={styles.appContainer}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/studygirl.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> Hello!</Text>
        <View style={styles.loadingContainer}>
          <Image
            style={styles.loadingicon}
            source={require("../assets/icons/image.png")}
          />
        </View>
      </View>
    </View>
  );
}

export default LoadingScreen;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  imagecontainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 220,
    height: 220,
    margin: 10,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
    flexWrap:"nowrap",
    justifyContent: "center",
    alignItems:"center",
    alignContent:"center",
    backgroundColor: "#fff",
    marginTop: 10, // Adjusted marginTop to create space between the text and icon
  },
  textStyle: {
    fontFamily: "FreckleFace",
    fontSize: 60,
    height: 350,
    color: "#9747FF",
  },
  loadingContainer: {
    
    bottom: 200, // Place it at the bottom of the text container
  },
  loadingicon: {
    width: 85,
    height: 75,
    
  },
});
