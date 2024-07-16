import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors';

const Button = ({ link, text }) => {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(link)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
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

export default Button;