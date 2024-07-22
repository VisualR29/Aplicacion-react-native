import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../global/colors';
import IncomeItem from './IncomeItem';
import incomeData from '../../data/income.json';

const IncomeList = () => {

    const [income, setIncome] = useState([]);

    useEffect(() => {
        setIncome(incomeData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
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