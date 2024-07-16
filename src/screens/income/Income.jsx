import { View, StyleSheet } from 'react-native';
import IncomeList from '../../components/income/IncomeList';

const Income = () => {
    return (
        <View style={styles.container}>
            <IncomeList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFFFFF"
    }
});

export default Income;