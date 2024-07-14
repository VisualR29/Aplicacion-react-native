import { Text, StyleSheet, View } from 'react-native'

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
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
    emptyContainerStyle: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});


export default IncomeItem;