import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../global/colors";

const ProfileButton = ({
    title = "",
    onPress = () => { },
    color = colors.beige200,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default ProfileButton;

const styles = StyleSheet.create({
    button: {
        marginTop: "5%",
        width: "80%",
        borderRadius: 15,
        backgroundColor: colors.beige200,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
    },
    text: {
        fontSize: 18,
        color: colors.black,
    },
});