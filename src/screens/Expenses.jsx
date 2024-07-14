import { View } from 'react-native';
import ExpensesList from '../components/expenses/ExpensesList';
import Header from '../components/Header'

const Expenses = () => {
    return (
        <View>
            <Header title={"Gastos"} />
            <ExpensesList />
        </View>
    )
}

export default Expenses;