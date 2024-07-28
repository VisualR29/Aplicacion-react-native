import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../global/colors';
import ExpensesItem from './ExpensesItem';
import expensesData from '../../data/expenses.json';

const ExpensesList = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        setExpenses(expensesData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
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
        height: "100%",
        backgroundColor: colors.green400,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ExpensesList;