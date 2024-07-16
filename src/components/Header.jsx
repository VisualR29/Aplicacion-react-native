import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import AddButton from './AddButton';

const Header = ({ title, link = "" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {link !== "" && <AddButton link={link} />}
        </View>
    )
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