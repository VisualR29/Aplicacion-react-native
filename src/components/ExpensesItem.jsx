import { Text, StyleSheet, View } from 'react-native'

const ExpensesItem = ({ expense }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nombre}>{expense.nombre}</Text>
            <Text>Monto: ${expense.monto.toFixed(2)}</Text>
            <Text>Recibido en: {expense.tipopago}</Text>
            <Text>Categoría: {expense.categoria}</Text>
            <Text>Frecuencia: {expense.frecuencia}</Text>
            <Text>Fecha: {expense.fecha}</Text>
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
});


export default ExpensesItem;