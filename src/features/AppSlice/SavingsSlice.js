import { createSlice } from '@reduxjs/toolkit';

export const savingsSlice = createSlice({
    name: 'savings',
    initialState: {
        savings: []
    },
    reducers: {
        addSaving: (state, action) => {
            state.savings.push(action.payload);
        },
    }
});

export const { addSaving } = savingsSlice.actions;
export default savingsSlice.reducer;