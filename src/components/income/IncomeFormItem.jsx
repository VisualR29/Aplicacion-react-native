import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../global/colors';
import { usePostIncomeMutation } from '../../services/AppServices';
import { useSelector } from 'react-redux';

const IncomeFormItem = ({ goBack }) => {
    const localId = useSelector((state) => state.auth.value.localId);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [triggerPostIncome] = usePostIncomeMutation();


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

    const handleSubmitIncome = async (values, { resetForm }) => {
        try {
            await triggerPostIncome({
                localId,
                newIncome: {
                    nombre: values.nombre,
                    monto: Number(values.monto),
                    recibidoen: values.recibidoen,
                    categoria: values.categoria,
                    frecuencia: values.frecuencia,
                    fecha: formatDate(values.fecha),
                }
            });
            resetForm();
            Alert.alert('Ingreso agregado', 'El nuevo ingreso ha sido agregado correctamente.');
            goBack();
        } catch (error) {
            Alert.alert('Error', 'El ingreso no se pudo agregar, intente más tarde.');
            console.error(error);
            goBack();
        }
    };

    return (
        <Formik
            initialValues={{ monto: '', nombre: '', recibidoen: '', categoria: '', frecuencia: '', fecha: new Date() }}
            validationSchema={IncomeSchema}
            onSubmit={(values, actions) => handleSubmitIncome(values, actions)}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text>Nombre:</Text>
                    <TextInput
                        onChangeText={handleChange('nombre')}
                        onBlur={handleBlur('nombre')}
                        value={values.nombre}
                        style={styles.input}
                    />
                    {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                    <Text>Monto:</Text>
                    <TextInput
                        onChangeText={handleChange('monto')}
                        onBlur={handleBlur('monto')}
                        value={values.monto}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                    {touched.monto && errors.monto && <Text style={styles.error}>{errors.monto}</Text>}

                    <Text>Recibido en:</Text>
                    <Picker
                        selectedValue={values.recibidoen}
                        onValueChange={(itemValue) => setFieldValue('recibidoen', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Efectivo" value="Efectivo" />
                        <Picker.Item label="Débito" value="Debito" />
                        <Picker.Item label="Crédito" value="Credito" />
                    </Picker>
                    {touched.recibidoen && errors.recibidoen && <Text style={styles.error}>{errors.recibidoen}</Text>}

                    <Text>Categoría:</Text>
                    <Picker
                        selectedValue={values.categoria}
                        onValueChange={(itemValue) => setFieldValue('categoria', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Aguinaldo" value="Aguinaldo" />
                        <Picker.Item label="Bonos" value="Bonos" />
                        <Picker.Item label="Emprendimiento" value="Emprendimiento" />
                        <Picker.Item label="Intereses y Dividendos" value="Intereses" />
                        <Picker.Item label="Otros" value="Otros" />
                        <Picker.Item label="Propinas" value="Propinas" />
                        <Picker.Item label="Regalos" value="Regalos" />
                        <Picker.Item label="Salario" value="Salario" />
                    </Picker>
                    {touched.categoria && errors.categoria && <Text style={styles.error}>{errors.categoria}</Text>}

                    <Text>Frecuencia:</Text>
                    <Picker
                        selectedValue={values.frecuencia}
                        onValueChange={(itemValue) => setFieldValue('frecuencia', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Sin frecuencia" value="Sin frecuencia" />
                        <Picker.Item label="Semanal" value="Semanal" />
                        <Picker.Item label="Quincenal" value="Quincenal" />
                        <Picker.Item label="Mensual" value="Mensual" />
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

                    <Button
                        onPress={handleSubmit}
                        color={colors.beige300}
                        title='Agregar Ingreso'
                    />
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

export default IncomeFormItem;