import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors';
import AddButton from './AddButton';

const Header = ({ title = "HEYEYYYYY", link = "" }) => {
    if (link = "") {
        return (
            <View View style={styles.container} >
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{link}</Text>
            </View >
        )
    } else if (link != ""){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{link}</Text>
                <AddButton link={link} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        backgroundColor: colors.green1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        color: colors.black,
        fontSize: 22,
        fontWeight: 'bold'
    },
});

export default Header;