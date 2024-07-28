import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green600,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        width: "60%",
    },
    text: {
        color: colors.beige100,
        fontFamily: "MyFont",
        fontWeight: "bold",
        fontSize: 22,
    },
});