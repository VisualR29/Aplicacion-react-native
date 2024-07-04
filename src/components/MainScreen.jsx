import React from "react";
import { Text, View, Alert, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { colors } from "../global/colors";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Prueba</Text>
            <Button
                title="Presiona Aquí"
                onPress={() => Alert.alert('¡Botón presionado!')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default MainScreen