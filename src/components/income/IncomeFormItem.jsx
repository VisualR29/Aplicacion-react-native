import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const IncomeFormItem = ({ addIncome }) => {
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const IncomeSchema = Yup.object().shape({
        monto: Yup.number().required('Monto es requerido'),
        nombre: Yup.string().required('Nombre es requerido'),
        recibidoen: Yup.string().required('Recibido en es requerido'),
        categoria: Yup.string().required('Categoría es requerida'),
        frecuencia: Yup.string().required('Frecuencia es requerida'),
        fecha: Yup.date().required('Fecha es requerida'),
    });

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    };

    return (
        <Formik
            initialValues={{ monto: '', nombre: '', recibidoen: '', categoria: '', frecuencia: '', fecha: new Date() }}
            validationSchema={IncomeSchema}
            onSubmit={(values) => addIncome({ ...values, fecha: formatDate(values.fecha) })}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text>Monto:</Text>
                    <TextInput
                        onChangeText={handleChange('monto')}
                        onBlur={handleBlur('monto')}
                        value={values.monto}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                    {touched.monto && errors.monto && <Text style={styles.error}>{errors.monto}</Text>}

                    <Text>Nombre:</Text>
                    <TextInput
                        onChangeText={handleChange('nombre')}
                        onBlur={handleBlur('nombre')}
                        value={values.nombre}
                        style={styles.input}
                    />
                    {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                    <Text>Recibido en:</Text>
                    <Picker
                        selectedValue={values.recibidoen}
                        onValueChange={(itemValue) => setFieldValue('recibidoen', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Cuenta Bancaria" value="Cuenta Bancaria" />
                        <Picker.Item label="PayPal" value="PayPal" />
                        <Picker.Item label="Efectivo" value="Efectivo" />
                        <Picker.Item label="Transferencia Bancaria" value="Transferencia Bancaria" />
                    </Picker>
                    {touched.recibidoen && errors.recibidoen && <Text style={styles.error}>{errors.recibidoen}</Text>}

                    <Text>Categoría:</Text>
                    <Picker
                        selectedValue={values.categoria}
                        onValueChange={(itemValue) => setFieldValue('categoria', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Salario" value="Salario" />
                        <Picker.Item label="Freelance" value="Freelance" />
                        <Picker.Item label="Ventas" value="Ventas" />
                        <Picker.Item label="Inversiones" value="Inversiones" />
                        <Picker.Item label="Intereses" value="Intereses" />
                        <Picker.Item label="Consultoría" value="Consultoría" />
                        <Picker.Item label="Rentas" value="Rentas" />
                        <Picker.Item label="Bonos" value="Bonos" />
                        <Picker.Item label="Educación" value="Educación" />
                        <Picker.Item label="Regalos" value="Regalos" />
                    </Picker>
                    {touched.categoria && errors.categoria && <Text style={styles.error}>{errors.categoria}</Text>}

                    <Text>Frecuencia:</Text>
                    <Picker
                        selectedValue={values.frecuencia}
                        onValueChange={(itemValue) => setFieldValue('frecuencia', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Una vez" value="Una vez" />
                        <Picker.Item label="Mensual" value="Mensual" />
                        <Picker.Item label="Trimestral" value="Trimestral" />
                        <Picker.Item label="Anual" value="Anual" />
                    </Picker>
                    {touched.frecuencia && errors.frecuencia && <Text style={styles.error}>{errors.frecuencia}</Text>}

                    <Text>Fecha:</Text>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                        <TextInput
                            value={formatDate(values.fecha)}
                            style={styles.input}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {datePickerVisible && (
                        <DateTimePicker
                            value={values.fecha}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setDatePickerVisible(false);
                                if (selectedDate) {
                                    setFieldValue('fecha', selectedDate);
                                }
                            }}
                        />
                    )}
                    {touched.fecha && errors.fecha && <Text style={styles.error}>{errors.fecha}</Text>}

                    <Button onPress={handleSubmit} title="Agregar Ingreso" />
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
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default IncomeFormItem;