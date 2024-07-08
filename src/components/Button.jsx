import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../global/colors';

const Button = ({ navigation, link, text }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate({link})}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
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
    }
});

export default Button