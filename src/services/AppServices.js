import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["Saving", "Income", "Expenses", "profileImageGet"],
    endpoints: (builder) => ({
        getSavings: builder.query({
            query: () => `savings.json`,
            transformResponse: (res) => {
                return Object.values(res);
            },
            providesTags: ["Saving"],
        }),
        postSaving: builder.mutation({
            query: (newSaving) => ({
                url: "savings.json",
                method: "POST",
                body: newSaving,
            }),
            invalidatesTags: ["Saving"],
        }),
        getExpenses: builder.query({
            query: () => `expenses.json`,
            transformResponse: (res) => {
                return Object.values(res);
            },
            providesTags: ["Expenses"],
        }),
        postExpense: builder.mutation({
            query: (newExpenses) => ({
                url: "expenses.json",
                method: "POST",
                body: newExpenses,
            }),
            invalidatesTags: ["Expenses"],
        }),
        getIncome: builder.query({
            query: () => `income.json`,
            transformResponse: (res) => {
                return Object.values(res);
            },
            providesTags: ["Income"],
        }),
        postIncome: builder.mutation({
            query: (newIncome) => ({
                url: "income.json",
                method: "POST",
                body: newIncome,
            }),
            invalidatesTags: ["Income"],
        }),
        // getIncome: builder.query({
        //     query: (date) => `income.json?orderBy="fecha"&equalTo="${date}"`
        // }),
        // getIncomeId: builder.query({
        //     query: (incomeId) => `income.json?orderBy="idingreso"&equalTo=${incomeId}`
        // }),
        getProfileimage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["profileImageGet"],
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
            invalidatesTags: ["profileImageGet"],
        }),
    })
})

export const {
    useGetSavingsQuery,
    usePostSavingMutation,
    useGetExpensesQuery,
    usePostExpenseMutation,
    useGetIncomeQuery,
    usePostIncomeMutation,
    useGetProfileimageQuery,
    usePostProfileImageMutation
} = appApi;