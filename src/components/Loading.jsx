import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors } from '../global/colors';

const Loading = ({ message, act }) => {
    if (act) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.black} />
                {message && <Text style={styles.message}>{message}</Text>}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {message && <Text style={styles.message}>{message}</Text>}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green300,
    },
    message: {
        marginTop: 10,
        color: colors.text,
        fontSize: 20,
    },
});

export default Loading;