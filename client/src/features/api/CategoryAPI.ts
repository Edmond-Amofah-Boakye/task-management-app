import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const categorySclice = createApi({
    reducerPath: "Category",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/v1"}),
    tagTypes: ["Category"],

    endpoints: (builder)=>({
        getCategories: builder.query({
            query: ()=>({
                url: "/category",
                method: "GET"
            }),
            providesTags: ["Category"]
        }),

        getCategory: builder.query({
            query: ({ id })=>({
                url: `/category/${id}`,
                method: "GET",
                body: id
            }),

            providesTags: ["Category"]
        }),

        deleteCategory: builder.mutation({
            query: ({ id })=>({
                url: `/category/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Category"]
        })
    })
})



export const { useGetCategoriesQuery, useGetCategoryQuery, useDeleteCategoryMutation } = categorySclice