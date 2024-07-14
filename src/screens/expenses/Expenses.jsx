import { View } from 'react-native';
import ExpensesList from '../../components/expenses/ExpensesList';
import Header from '../../components/Header'

const Expenses = () => {
    return (
        <View>
            <Header title={"Gastos"} link='ExpensesFormScreen'/>
            <ExpensesList />
        </View>
    )
}

export default Expenses;