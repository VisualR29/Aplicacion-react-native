import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

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

export default Header;