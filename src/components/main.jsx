import React from "react";
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import Constants from "expo-constants";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <TouchableWithoutFeedback
                onPress={() => Alert.alert('Se ha tocado el botón')}>
                <Text>Hola, Coder Hi!</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Main