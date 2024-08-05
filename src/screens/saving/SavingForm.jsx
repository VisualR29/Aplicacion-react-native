import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import SavingFormBox from "../../components/saving/SavingFormBox";
import { colors } from "../../global/colors";

export const SavingForm = () => {

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={"Nuevo Ahorro"} />
            <SavingFormBox goBack={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.green200,
    }
})