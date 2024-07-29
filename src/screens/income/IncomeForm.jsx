import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import IncomeFormItem from "../../components/income/IncomeFormItem";
import { colors } from "../../global/colors";

export const IncomeForm = () => {

    const navigation = useNavigation()

    const goBack = (saving) => {
        console.log('Nuevo Ingreso:', income);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={"Nuevo Ingreso"} />
            <IncomeFormItem addIncome={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.green200,
    }
})