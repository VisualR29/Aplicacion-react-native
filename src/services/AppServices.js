import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realtimeDataBase";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["saving", "income", "expense", "profileImageGet"],
    endpoints: (builder) => ({
        //Savings
        getSavings: builder.query({
            query: (localId) => `users/${localId}/savings.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return Object.keys(res).map(id => ({
                    id,
                    ...res[id]
                }));
            },
            providesTags: ["saving"],
        }),
        postSaving: builder.mutation({
            query: ({ localId, newSaving }) => ({
                url: `users/${localId}/savings.json`,
                method: "POST",
                body: newSaving,
            }),
            invalidatesTags: ["saving"],
        }),
        updateSaving: builder.mutation({
            query: ({ localId, id, ...saving }) => ({
                url: `users/${localId}/savings/${id}.json`,
                method: "PUT",
                body: saving,
            }),
            invalidatesTags: ["saving"],
        }),
        deleteSaving: builder.mutation({
            query: ({ localId, id }) => ({
                url: `users/${localId}/savings/${id}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["saving"],
        }),
        //Expenses
        getExpenses: builder.query({
            query: (localId) => `users/${localId}/expenses.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return Object.keys(res).map(id => ({
                    id,
                    ...res[id]
                }));
            },
            providesTags: ["expense"],
        }),
        postExpense: builder.mutation({
            query: ({ localId, newExpense }) => ({
                url: `users/${localId}/expenses.json`,
                method: "POST",
                body: newExpense,
            }),
            invalidatesTags: ["expense"],
        }),
        updateExpense: builder.mutation({
            query: ({ localId, id, ...expense }) => ({
                url: `users/${localId}/expenses/${id}.json`,
                method: "PUT",
                body: expense,
            }),
            invalidatesTags: ["expense"],
        }),
        deleteExpense: builder.mutation({
            query: ({ localId, id }) => ({
                url: `users/${localId}/expenses/${id}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["expense"],
        }),
        //Income
        getIncome: builder.query({
            query: (localId) => `users/${localId}/income.json`,
            transformResponse: (res) => {
                if (!res) return [];
                return Object.keys(res).map(id => ({
                    id,
                    ...res[id]
                }));
            },
            providesTags: ["income"],
        }),
        postIncome: builder.mutation({
            query: ({ localId, newIncome }) => ({
                url: `users/${localId}/income.json`,
                method: "POST",
                body: newIncome,
            }),
            invalidatesTags: ["income"],
        }),
        updateIncome: builder.mutation({
            query: ({ localId, id, ...income }) => ({
                url: `users/${localId}/income/${id}.json`,
                method: "PUT",
                body: income,
            }),
            invalidatesTags: ["income"],
        }),
        deleteIncome: builder.mutation({
            query: ({ localId, id }) => ({
                url: `users/${localId}/income/${id}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["income"],
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
    useDeleteSavingMutation, 

    useGetExpensesQuery,
    usePostExpenseMutation,
    useUpdateExpenseMutation,
    useDeleteExpenseMutation,

    useGetIncomeQuery,
    usePostIncomeMutation,
    useUpdateIncomeMutation,
    useDeleteIncomeMutation,

    useGetProfileimageQuery,
    usePostProfileImageMutation,
} = appApi;