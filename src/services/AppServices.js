import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";



export const AppApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getSavings: builder.query({
            query: () => `savings.json`
        }),
        getExpenses: builder.query({
            query: (date) => `expenses.json`
        }),
        getIncome: builder.query({
            query: (date) => `income.json?orderBy="fecha"&equalTo="${date}"`
        }),
        getIncome: builder.query({
            query: (incomeId) => `income.json?orderBy="idingreso"&equalTo=${incomeId}`
        })
    })
})