import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import { colors } from '../../global/colors'
import SavingBox from './SavingBox'
import savingsData from '../../data/savings.json'
import { useGetSavingsQuery } from '../../services/AppServices';

const SavingList = () => {

    // const {data: savings} = useGetSavingsQuery()

    const [savings, setSavings] = useState([]);

    useEffect(() => {
        setSavings(savingsData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={savings}
                renderItem={({ item }) =>
                    <SavingBox
                        saving={item}
                    />}
                keyExtractor={item => item.idahorro.toString()}
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