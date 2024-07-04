import React from "react";
import { Text, View, TouchableWithoutFeedback, Alert, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { colors } from "../global/colors";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Finanzas</Text>
            <TouchableWithoutFeedback
                onPress={() => Alert.alert('Se ha tocado el botón de INICIAR')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.version}>Versión 0.1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green2,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.black,
    },
    button: {
        backgroundColor: colors.beige2,
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
        fontFamily: 'Opensans'
    },
});


export default WelcomeScreen