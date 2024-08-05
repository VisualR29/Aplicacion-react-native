import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUpdateSavingMutation, useDeleteSavingMutation } from '../../services/AppServices';
import { useSelector } from 'react-redux';
import { colors } from '../../global/colors';

const EditSavingsForm = ({ saving, onClose }) => {
    const localId = useSelector((state) => state.auth.value.localId);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [updateSaving] = useUpdateSavingMutation();
    const [deleteSaving] = useDeleteSavingMutation();

    const SavingSchema = Yup.object().shape({
        nombre: Yup.string().required('Nombre del ahorro es requerido'),
        meta: Yup.number().required('Meta del ahorro es requerida'),
        cantidad: Yup.number().required('Cantidad ahorrada es requerida'),
        fechameta: Yup.date().required('Fecha meta es requerida'),
    });

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };

    const handleSubmitSaving = async (values) => {
        try {
            await updateSaving({
                localId,
                id: saving.id,
                ...values,
                fechameta: formatDate(values.fechameta),
            });
            Alert.alert('Ahorro actualizado', 'El ahorro ha sido actualizado correctamente.');
            onClose();
        } catch (error) {
            Alert.alert('Error', 'El ahorro no se pudo actualizar, intente más tarde.');
            console.error(error);
            onClose();
        }
    };

    const handleDeleteSaving = async () => {
        Alert.alert(
            "Confirmar eliminación",
            "¿Estás seguro de que quieres eliminar este ahorro?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: async () => {
                        try {
                            await deleteSaving({
                                localId,
                                id: saving.id
                            });
                            onClose();
                        } catch (error) {
                            console.error(error);
                            onClose();
                        }
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <Formik
            initialValues={{
                nombre: saving.nombre,
                meta: saving.meta.toString(),
                cantidad: saving.cantidad.toString(),
                fechameta: saving.fechameta ? new Date(saving.fechameta) : new Date(),
            }}
            validationSchema={SavingSchema}
            onSubmit={handleSubmitSaving}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text>Nombre del ahorro:</Text>
                    <TextInput
                        onChangeText={handleChange('nombre')}
                        onBlur={handleBlur('nombre')}
                        value={values.nombre}
                        style={styles.input}
                    />
                    {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                    <Text>Meta del ahorro:</Text>
                    <TextInput
                        onChangeText={handleChange('meta')}
                        onBlur={handleBlur('meta')}
                        value={values.meta}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    {touched.meta && errors.meta && <Text style={styles.error}>{errors.meta}</Text>}

                    <Text>Cantidad ahorrada:</Text>
                    <TextInput
                        onChangeText={handleChange('cantidad')}
                        onBlur={handleBlur('cantidad')}
                        value={values.cantidad}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    {touched.cantidad && errors.cantidad && <Text style={styles.error}>{errors.cantidad}</Text>}

                    <Text>Fecha meta:</Text>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                        <TextInput
                            value={formatDate(values.fechameta)}
                            style={styles.input}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {datePickerVisible && (
                        <DateTimePicker
                            value={values.fechameta}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setDatePickerVisible(false);
                                if (selectedDate) {
                                    setFieldValue('fechameta', selectedDate);
                                }
                            }}
                        />
                    )}
                    {touched.fechameta && errors.fechameta && <Text style={styles.error}>{errors.fechameta}</Text>}

                    <Button
                        onPress={handleSubmit}
                        title="Guardar Cambios"
                        color={colors.beige300} />
                    <Text></Text>
                    <Button
                        onPress={handleDeleteSaving}
                        title="Eliminar Ahorro"
                        color="red" />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: colors.gray,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
});

export default EditSavingsForm;