import { StyleSheet, View, FlatList, Text } from 'react-native'
import { colors } from '../../global/colors'
import SavingBox from './SavingBox'
import { useGetSavingsQuery } from '../../services/AppServices';
import { useSelector } from 'react-redux';

const SavingList = () => {
    const localId = useSelector((state) => state.auth.value.localId);
    const { data: savings, error, isLoading } = useGetSavingsQuery(localId);

    if (isLoading) return <View><Text>Loading...</Text></View>;
    if (error) return <View><Text>Error: {error.message}</Text></View>;

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={savings}
                renderItem={({ item }) =>
                    <SavingBox
                        saving={item}
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
        width: '50%',
    },
});

export default SavingList;
