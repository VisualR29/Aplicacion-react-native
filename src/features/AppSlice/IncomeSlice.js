import { createSlice } from '@reduxjs/toolkit';

export const incomeSlice = createSlice({
    name: 'income',
    initialState: {
        income: []
    },
    reducers: {
        addIncome: (state, action) => {
            state.income.push(action.payload);
        },
    }
});

export const { addIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
