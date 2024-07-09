import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { colors } from '../global/colors';
import expensesData from '../data/expenses.json';
import ExpensesItem from './ExpensesItem';

const ExpensesList = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        setExpenses(expensesData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={expenses}
                renderItem={({ item }) =>
                    <ExpensesItem
                        expense={item}
                    />}
                keyExtractor={item => item.idgasto.toString()}
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

export default ExpensesList;