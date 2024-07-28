import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../../global/colors';

const IncomeItem = ({ income }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nombre}>{income.nombre}</Text>
            <Text>Monto: ${income.monto.toFixed(2)}</Text>
            <Text>Recibido en: {income.recibidoen}</Text>
            <Text>Categoría: {income.categoria}</Text>
            <Text>Frecuencia: {income.frecuencia}</Text>
            <Text>Fecha: {income.fecha}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 4,
        backgroundColor: colors.white,
        borderRadius: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default IncomeItem;