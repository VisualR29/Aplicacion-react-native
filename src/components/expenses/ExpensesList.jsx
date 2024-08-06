import { StyleSheet, View, FlatList, Text } from 'react-native';
import { colors } from '../../global/colors';
import { useGetExpensesQuery } from '../../services/AppServices';
import ExpensesItem from './ExpensesItem';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const ExpensesList = () => {
    const localId = useSelector((state) => state.auth.value.localId);
    const { data: expenses, isLoading, error } = useGetExpensesQuery(localId);

    if (isLoading) return <Loading message={"Cargando..."} act={true} />;
    if (error) return <Loading message={`Error: ${error.message}`} act={false} />;

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={expenses}
                renderItem={({ item }) =>
                    <ExpensesItem
                        expense={item}
                    />}
                keyExtractor={item => item.id}
                style={styles.list}
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
        paddingVertical: "5%",
    },
    list: {
        width: '75%',
    },
});

export default ExpensesList;