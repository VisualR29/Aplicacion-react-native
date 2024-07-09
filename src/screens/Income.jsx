import { View } from 'react-native';
import Header from '../components/Header'
import IncomeList from '../components/IncomeList';

const Income = () => {
    return (
        <View>
            <Header title={"INGRESOS"} />
            <IncomeList />
        </View>
    )
}

export default Income;