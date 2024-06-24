import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#7A5DFF",
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});
