import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../../global/colors';
import { useGetIncomeQuery } from '../../services/AppServices';
import IncomeItem from './IncomeItem';

const IncomeList = () => {

    const { data: income, isLoading, error } = useGetIncomeQuery();

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={income}
                renderItem={({ item }) =>
                    <IncomeItem income={item} />}
                keyExtractor={item => item.idingreso}
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
    }
});

export default IncomeList;