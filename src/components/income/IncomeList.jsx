import { StyleSheet, View, FlatList, Text } from 'react-native';
import { colors } from '../../global/colors';
import { useGetIncomeQuery } from '../../services/AppServices';
import IncomeItem from './IncomeItem';
import { useSelector } from 'react-redux';

const IncomeList = () => {
    const localId = useSelector((state) => state.auth.value.localId);
    const { data: income, isLoading, error } = useGetIncomeQuery(localId);

    if (isLoading) return <View><Text>Loading...</Text></View>;
    if (error) return <View><Text>Error: {error.message}</Text></View>;

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={income}
                renderItem={({ item }) =>
                    <IncomeItem
                        income={item}
                    />}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
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
    }
});

export default IncomeList;
