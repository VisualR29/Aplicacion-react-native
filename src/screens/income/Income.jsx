import { View } from 'react-native';
import Header from '../../components/Header'
import IncomeList from '../../components/income/IncomeList';

const Income = () => {
    return (
        <View>
            <Header title={"INGRESOS"} link='IncomeFormScreen' />
            <IncomeList />
        </View>
    )
}

export default Income;