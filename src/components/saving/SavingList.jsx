import { StyleSheet, View, FlatList } from 'react-native'
import { colors } from '../../global/colors'
import SavingBox from './SavingBox'
import { useGetSavingsQuery } from '../../services/AppServices';

const SavingList = () => {

    const {data: savings, isLoading, error} = useGetSavingsQuery()

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={savings}
                renderItem={({ item }) =>
                    <SavingBox
                        saving={item}
                    />}
                keyExtractor={item => item.idahorro}
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

export default SavingList;