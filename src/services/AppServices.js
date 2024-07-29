import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["Saving", "Income", "Expenses", "profileImageGet"],
    endpoints: (builder) => ({
        //Savings
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
        updateSaving: builder.mutation({
            query: ({ id, ...saving }) => ({
                url: `savings/${id}.json`,
                method: "PUT",
                body: saving,
            }),
            invalidatesTags: ["Saving"],
        }),
        //Expenses
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
        updateExpense: builder.mutation({
            query: ({ id, ...expense }) => ({
                url: `expenses/${id}.json`,
                method: "PUT",
                body: expense,
            }),
            invalidatesTags: ["Expense"],
        }),
        //Income
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
        updateIncome: builder.mutation({
            query: ({ id, ...income }) => ({
                url: `income/${id}.json`,
                method: "PUT",
                body: income,
            }),
            invalidatesTags: ["Income"],
        }),
        //Profile
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
    useUpdateSavingMutation,
    useGetExpensesQuery,
    usePostExpenseMutation,
    useUpdateExpenseMutation,
    useGetIncomeQuery,
    usePostIncomeMutation,
    useUpdateIncomeMutation,
    useGetProfileimageQuery,
    usePostProfileImageMutation
} = appApi;