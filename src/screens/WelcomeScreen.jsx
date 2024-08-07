import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Finanzas</Text>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Main')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.version}>-Versión 1.0-</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green400,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.black,
    },
    button: {
        backgroundColor: colors.beige200,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
    },
    buttonText: {
        color: colors.black,
        fontSize: 24,
        fontWeight: 'bold',
    },
    version: {
        fontSize: 14,
        color: colors.black,
    },
});

export default WelcomeScreen;