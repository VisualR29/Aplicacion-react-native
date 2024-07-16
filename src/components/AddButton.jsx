import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors';

const AddButton = ({ link }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(link)}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AddButton;