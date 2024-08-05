import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, Button } from 'react-native';
import { colors } from '../../global/colors';
import EditIncomeForm from './EditIncomeForm';

const IncomeItem = ({ income }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.nombre}>{income.nombre}</Text>
                <Text>Monto: ${income.monto.toFixed(2)}</Text>
                <Text>Recibido en: {income.recibidoen}</Text>
                <Text>Categoría: {income.categoria}</Text>
                <Text>Frecuencia: {income.frecuencia}</Text>
                <Text>Fecha: {income.fecha}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <EditIncomeForm income={income} onClose={handleCloseModal} />
                        <Button title="Cerrar" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    );
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default IncomeItem;
