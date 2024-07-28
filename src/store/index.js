import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApi } from "../services/AppServices";
import { authApi } from "../services/AuthServices";
import incomeReducer from "../features/AppSlice/SavingsSlice";
import expensesReducer from "../features/AppSlice/ExpensesSlice";
import savingsReducer from "../features/AppSlice/SavingsSlice";
import authReducer from "../features/User/UserSlice";

const store = configureStore({
    reducer: {
        income: incomeReducer,
        expenses: expensesReducer,
        savings: savingsReducer,
        auth: authReducer,
        [appApi.reducerPath]: appApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(appApi.middleware)
            .concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store