import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CredentialResponse {
  access_token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

interface ConfirmRequest {
  email: string | null;
  token: string | null;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<CredentialResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation<void, RegisterRequest>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials
      })
    }),
    confirm: builder.mutation<CredentialResponse, ConfirmRequest>({
      query: (put) => ({
        url: '/auth/confirmRegister',
        method: 'PUT',
        body: put
      })
    }),
    checkAuth: builder.query<CredentialResponse, string | null>({
      query: (token) => ({
        url: '/auth/me',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
    })
  }),
})

export const { 
  useLoginMutation, 
  useRegisterMutation, 
  useConfirmMutation, 
  useCheckAuthQuery 
} = authApi;