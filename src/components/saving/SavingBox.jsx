import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, Button } from 'react-native'
import { colors } from '../../global/colors';
import EditSavingsForm from './EditSavingForm';

const SavingBox = ({ saving }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableOpacity 
            onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.name}>{saving.nombre}</Text>
                <Text style={styles.meta}>Meta: ${saving.meta}</Text>
                <Text style={styles.amount}>Ahorrado: ${saving.cantidad}</Text>
                <Text style={styles.date}>Fecha Meta: {saving.fechameta}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <EditSavingsForm saving={saving} onClose={handleCloseModal} />
                        <Button title="Cerrar" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: colors.white,
        borderRadius: 5,
        shadowColor: colors.black,
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



export default SavingBox;