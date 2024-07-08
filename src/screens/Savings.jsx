import { View } from 'react-native'
import Header from '../components/Header'
import SavingList from '../components/SavingList'

const Savings = () => {

    return (
        <View>
            <Header title={"AHORRO"} />
            <SavingList />
        </View>
    )
}

export default Savings;