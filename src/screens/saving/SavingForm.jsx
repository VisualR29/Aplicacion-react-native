import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import SavingFormBox from "../../components/saving/SavingFormBox";
import { colors } from "../../global/colors";

export const SavingForm = () => {

    const navigation = useNavigation()

    const addSaving = (saving) => {
        // Lógica para agregar el ingreso a la base de datos o al estado
        // Por ejemplo, puedes hacer una llamada a la API aquí
        console.log('Nuevo Ahorro:', saving);
        Alert.alert('Ahorro agregado', 'El nuevo ahorro ha sido agregado correctamente.');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={"Nuevo Ahorro"} />
            <SavingFormBox addSaving={addSaving} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.green200,
    }
})