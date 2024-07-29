import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../global/colors';
import { usePostExpenseMutation } from '../../services/AppServices';

const ExpensesFormItem = ({ goBack }) => {

    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [triggerPostExpenese] = usePostExpenseMutation();

    const ExpenseSchema = Yup.object().shape({
        monto: Yup.number().required('Monto es requerido'),
        nombre: Yup.string().required('Nombre es requerido'),
        tipopago: Yup.string().required('Tipo de pago es requerido'),
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

    const handleSubmitExpense = async (values, { resetForm }) => {
        try {
            await triggerPostExpenese({
                nombre: values.nombre,
                monto: Number(values.monto),
                tipopago: values.tipopago,
                categoria: values.categoria,
                frecuencia: values.frecuencia,
                fecha: formatDate(values.fecha),
            });
            resetForm();
            Alert.alert('Gasto agregado', 'El nuevo gasto ha sido agregado correctamente.');
            goBack();
        } catch (error) {
            Alert.alert('Error', 'El gasto no se pudo agregar, intente más tarde.');
        }
    };


    return (
        <Formik
            initialValues={{ monto: '', nombre: '', tipopago: '', categoria: '', frecuencia: '', fecha: new Date() }}
            validationSchema={ExpenseSchema}
            onSubmit={(values, actions) => handleSubmitExpense(values, actions)}
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

                    <Text>Tipo de pago:</Text>
                    <Picker
                        selectedValue={values.tipopago}
                        onValueChange={(itemValue) => setFieldValue('tipopago', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Efectivo" value="Efectivo" />
                        <Picker.Item label="Débito" value="Debito" />
                        <Picker.Item label="Crédito" value="Credito" />
                    </Picker>
                    {touched.tipopago && errors.tipopago && <Text style={styles.error}>{errors.tipopago}</Text>}

                    <Text>Categoría:</Text>
                    <Picker
                        selectedValue={values.categoria}
                        onValueChange={(itemValue) => setFieldValue('categoria', itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Ahorro" value="Ahorro" />
                        <Picker.Item label="Comida" value="Comida" />
                        <Picker.Item label="Cuidado personal" value="Cuidado personal" />
                        <Picker.Item label="Deudas" value="Deudas" />
                        <Picker.Item label="Diversión" value="Diversion" />
                        <Picker.Item label="Educación" value="Educacion" />
                        <Picker.Item label="Ejercicio" value="Ejercicio" />
                        <Picker.Item label="Emprendimiento" value="Emprendimiento" />
                        <Picker.Item label="Gastos Administrativos" value="Gastos Administrativos" />
                        <Picker.Item label="Gastos Operativos" value="Gastos Operativos" />
                        <Picker.Item label="Hijos" value="Hijos" />
                        <Picker.Item label="Hogar" value="Hogar" />
                        <Picker.Item label="Impuestos" value="Impuestos" />
                        <Picker.Item label="Intereses" value="Intereses" />
                        <Picker.Item label="Marketing" value="Marketing" />
                        <Picker.Item label="Mascotas" value="Mascotas" />
                        <Picker.Item label="Materia prima" value="Materia prima" />
                        <Picker.Item label="Oficina" value="Oficina" />
                        <Picker.Item label="Otros gastos" value="Otros gastos" />
                        <Picker.Item label="Regalos" value="Regalos" />
                        <Picker.Item label="Renta" value="Renta" />
                        <Picker.Item label="Restaurantes" value="Restaurantes" />
                        <Picker.Item label="Salarios" value="Salarios" />
                        <Picker.Item label="Salud" value="Salud" />
                        <Picker.Item label="Seguros" value="Seguros" />
                        <Picker.Item label="Servicios" value="Servicios" />
                        <Picker.Item label="Shopping" value="Shopping" />
                        <Picker.Item label="Supermercados" value="Supermercados" />
                        <Picker.Item label="Suscripciones" value="Suscripciones" />
                        <Picker.Item label="Transporte" value="Transporte" />
                        <Picker.Item label="Viajes" value="Viajes" />
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
                        color={colors.beige300}
                        onPress={handleSubmit}
                        title="Agregar Gasto" />
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

export default ExpensesFormItem;