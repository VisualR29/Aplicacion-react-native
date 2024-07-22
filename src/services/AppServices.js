import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";



export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getSavings: builder.query({
            query: () => `savings.json`
        }),
        getExpenses: builder.query({
            query: () => `expenses.json`
        }),
        getIncome: builder.query({
            query: () => `income.json`
        }),
        // getIncome: builder.query({
        //     query: (date) => `income.json?orderBy="fecha"&equalTo="${date}"`
        // }),
        getIncomeId: builder.query({
            query: (incomeId) => `income.json?orderBy="idingreso"&equalTo=${incomeId}`
        })
    })
})

export const { useGetSavingsQuery, useGetExpensesQuery, useGetIncomeQuery, useGetIncomeIdQuery} = appApi;