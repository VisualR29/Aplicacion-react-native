import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { colors } from '../global/colors';
import incomeData from '../data/income.json';
import IncomeItem from './IncomeItem';

const IncomeList = () => {

    const [income, setIncome] = useState([]);

    useEffect(() => {
        setIncome(incomeData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={income}
                renderItem={({ item }) =>
                    <IncomeItem
                        income={item}
                    />}
                keyExtractor={item => item.idingreso.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default IncomeList;