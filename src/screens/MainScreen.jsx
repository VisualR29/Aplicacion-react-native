import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import Button from "../components/Button";

const MainScreen = () => {
    return (
        <>
            <View style={[styles.container, { flex: 1 }]}>
                <Text style={styles.profits}>Has ganado: 0$</Text>
                <Text style={styles.month}>July</Text>
            </View>
            <View style={[styles.container, { flex: 3, flexWrap: 'wrap' }]}>
                <Button link={"Ingresos"} text={"Ingresos"} />
                <Button link={"Ahorro"} text={"Ahorro"} />
                <Button link={"Gastos"} text={"Gastos"} />
                <Button link={"Estadisticas"} text={"Estadisticas"}/>
            </View>
            <View style={[styles.container, { flex: 1 }]}>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green400,
        alignItems: "center",
    },
    profits: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 70,
        marginBottom: 10,
    },
    month: {
        fontSize: 18,
    },
    button: {
        backgroundColor: colors.beige200,
        width: '40%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: '5%',
        marginHorizontal: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
    },
    buttonText: {
        color: colors.black,
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default MainScreen;