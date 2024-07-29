import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../global/colors';
import { useGetExpensesQuery } from '../../services/AppServices';
import ExpensesItem from './ExpensesItem';

const ExpensesList = () => {

    const { data: expenses, isLoading, error } = useGetExpensesQuery();

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={expenses}
                renderItem={({ item }) =>
                    <ExpensesItem
                        expense={item}
                    />}
                keyExtractor={item => item.idgasto}
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