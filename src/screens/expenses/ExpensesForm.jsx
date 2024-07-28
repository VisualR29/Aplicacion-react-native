import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ExpensesFormItem from "../../components/expenses/ExpensesFormItem";
import { colors } from "../../global/colors";

export const ExpensesForm = () => {

    const navigation = useNavigation()

    const addExpense = (expense) => {
        // Lógica para agregar el gasto a la base de datos o al estado
        // Por ejemplo, puedes hacer una llamada a la API aquí
        console.log('Nuevo Gasto:', expense);
        Alert.alert('Gasto agregado', 'El nuevo gasto ha sido agregado correctamente.');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={"Nuevo Gasto"} />
            <ExpensesFormItem addExpense={addExpense} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.green200,
    }
})