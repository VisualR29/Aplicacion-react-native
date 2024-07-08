import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../global/colors'
import savings from '../data/savings.json'

export const SavingList = () => {
    return (
        <View style={styles.container}>
            <Text>Hey</Text>
            {/* <FlatList
                data={savings}
                keyExtractor={saving => saving.idahorro}
                renderItem={({ saving }) =>
                    <SavingBox
                        saving={saving}
                    />}
            /> */}
        </View>
    )
}

// const styles = StyleSheet.create({
//     contenedor: {
//         width: '100%',
//         backgroundColor: colors.white
//     }
// })

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        backgroundColor: colors.green1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.black,
        fontSize: 22,
        fontWeight: 'bold'
    },
});
