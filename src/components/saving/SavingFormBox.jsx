import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../global/colors';

const NewSavingsForm = ({ addSaving }) => {
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const SavingSchema = Yup.object().shape({
        nombre: Yup.string().required('Nombre del ahorro es requerido'),
        meta: Yup.number().required('Meta del ahorro es requerida'),
        cantidadAhorrada: Yup.number().required('Cantidad ahorrada es requerida'),
        fechaMeta: Yup.date().required('Fecha meta es requerida'),
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
            initialValues={{ nombre: '', meta: '', cantidadAhorrada: '', fechaMeta: new Date() }}
            validationSchema={SavingSchema}
            onSubmit={(values) => addSaving({ ...values, fechaMeta: formatDate(values.fechaMeta) })}
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
                        keyboardType='numeric'
                        style={styles.input}
                    />
                    {touched.meta && errors.meta && <Text style={styles.error}>{errors.meta}</Text>}

                    <Text>Cantidad ahorrada:</Text>
                    <TextInput
                        onChangeText={handleChange('cantidadAhorrada')}
                        onBlur={handleBlur('cantidadAhorrada')}
                        value={values.cantidadAhorrada}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                    {touched.cantidadAhorrada && errors.cantidadAhorrada && <Text style={styles.error}>{errors.cantidadAhorrada}</Text>}

                    <Text>Fecha meta:</Text>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                        <TextInput
                            value={formatDate(values.fechaMeta)}
                            style={styles.input}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {datePickerVisible && (
                        <DateTimePicker
                            value={values.fechaMeta}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setDatePickerVisible(false);
                                if (selectedDate) {
                                    setFieldValue('fechaMeta', selectedDate);
                                }
                            }}
                        />
                    )}
                    {touched.fechaMeta && errors.fechaMeta && <Text style={styles.error}>{errors.fechaMeta}</Text>}

                    <Button
                        color={colors.beige300}
                        onPress={handleSubmit}
                        title="Agregar Ahorro" />
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

export default NewSavingsForm;
