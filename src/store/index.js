import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApi } from "../services/AppServices";
import { authApi } from "../services/AuthServices";
import authReducer from "../features/User/UserSlice";

const store = configureStore({
    reducer: {
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