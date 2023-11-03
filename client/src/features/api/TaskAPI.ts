import { createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'


export const taskSclice = createApi({
    reducerPath: "Task",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/v1/"}),
    endpoints: (builder)=>({
        getTasks: builder.query({
            query: ()=>({
                url:"task",
                method: "GET"
            })
        }),

        getTaskByID: builder.mutation({
            query: ({ id })=>({
                url: `task/${id}`,
                method: "GET",
            })
        }),

        deleteTask: builder.mutation({
            query: ({ id })=>({
                url: `task/${id}`,
                method: "DELETE",
            })
        })
    })
})


export const { useGetTasksQuery, useGetTaskByIDMutation, useDeleteTaskMutation } = taskSclice


