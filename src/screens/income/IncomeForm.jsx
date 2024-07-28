import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import IncomeFormItem from "../../components/income/IncomeFormItem";

export const IncomeForm = () => {

    const navigation = useNavigation()

    const addIncome = (income) => {
        // Lógica para agregar el ingreso a la base de datos o al estado
        // Por ejemplo, puedes hacer una llamada a la API aquí
        console.log('Nuevo Ingreso:', income);
        Alert.alert('Ingreso agregado', 'El nuevo ingreso ha sido agregado correctamente.');
        navigation.goBack();
    };

    return (
        <>
            <Header title={"INCOMEFORM"} />
            <IncomeFormItem addIncome={addIncome} />
        </>
    )
}