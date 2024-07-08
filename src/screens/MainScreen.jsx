import React from "react";
import { Text, View, Alert, StyleSheet, Button, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import { colors } from "../global/colors";

const MainScreen = ({ navigation }) => {
    return (
        <>
            <View style={[styles.container, { flex: 1 }]}>
                <Text style={styles.profits}>Has ganado: 0$</Text>
                <Text style={styles.month}>July</Text>
            </View>
            <View style={[styles.container, { flex: 3, flexWrap: 'wrap' }]}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Ingresos')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Ingresos</Text>
                    </View> 
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Gastos')}>
                    <View style={[styles.button, {}]}>
                        <Text style={styles.buttonText}>Gastos</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Ahorro')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Ahorro</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Estadisticas')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Estadisticas</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={[styles.container, { flex: 1 }]}>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
    },
    profits: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    month: {
        fontSize: 18,
        // fontFamily: 'Opensans'
        

    },
    button: {
        backgroundColor: colors.beige2,
        width: '40%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: '5%',
        marginHorizontal: '5%',
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
    }
});

export default MainScreen;