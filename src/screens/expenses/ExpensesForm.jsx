import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ExpensesFormItem from "../../components/expenses/ExpensesFormItem";
import { colors } from "../../global/colors";

export const ExpensesForm = () => {

    const navigation = useNavigation()

    const goBack = (expense) => {
        console.log('Nuevo Gasto:', expense);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={"Nuevo Gasto"} />
            <ExpensesFormItem addExpense={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.green200,
    }
})