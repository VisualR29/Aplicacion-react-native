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
        width: "100%",
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default SavingList;