import { createSlice } from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: []
    },
    reducers: {
        addExpenses: (state, action) => {
            state.expenses.push(action.payload);
        },
    }
});

export const { addExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
