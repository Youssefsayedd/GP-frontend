import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import PrimaryButton from "../Buttons.js/PrimaryButton";

function LoginPage({ navigation }) {
    const [accountFlag,setaccountFlag]=useState(false);
    function accountFlagHandler()
    {
        setaccountFlag(true);
    }


    function login() {
        navigation.navigate("LoginScreen");
        console.log("Bala7");

    }

    function Sign() {
        console.log("K");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topPage}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={require("../assets/icons/Welcome.png")} />
                </View>
            </View>
            <View style={styles.bottomPage}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={login}>Login</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={Sign}>Sign UP</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topPage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9747FF",
    },
    innerContainer: {
        height: 100,
        width: 300,
        justifyContent: "center",
        alignItems: "stretch",
    },
    image: {
        height: 115,
        width: 300,
    },
    bottomPage: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        width: '80%',
        marginVertical: 30,
    },
});
