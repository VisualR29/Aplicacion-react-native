import { Text, StyleSheet, View } from 'react-native'

const SavingBox = ({ saving }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{saving.nombre}</Text>
            <Text style={styles.meta}>Meta: ${saving.meta}</Text>
            <Text style={styles.amount}>Ahorrado: ${saving.cantidad}</Text>
            <Text style={styles.date}>Fecha Meta: {saving.fechameta}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    meta: {
        fontSize: 16,
    },
    amount: {
        fontSize: 16,
    },
    date: {
        fontSize: 14,
        color: '#888',
    },
});



export default SavingBox;