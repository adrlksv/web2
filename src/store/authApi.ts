import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/'}),
    endpoints: (builder) => ({
        signup:builder.mutation<{message: string}, {
            username: string;
            nickname: string;
            email: string;
            password: string;

        }>({
            query: (userData) => ({
                url: "/signup", method: "POST", body: userData
        }),
        }),
    }),
})

export const {useSignupMutation} = authApi
