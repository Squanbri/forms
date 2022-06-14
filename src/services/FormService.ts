import { IQuestion } from 'components/Survey/Question/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IForm {
  id: string;
  content: IFormContent;
  userId: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IFormContent {
  typeForm: 'survey';
  title: string;
  questions: IQuestion[];
}

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (build) => ({
    getForm: build.query<IForm, string>({
      query: (id) => ({
        url: `/forms/${id}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        }
      })
    }),
    getMyForms: build.query<IForm[], void>({
      query: () => ({
        url: '/forms/myForms',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        }
      })
    }),
    addForm: build.mutation<IForm, IFormContent>({
      query: (form) => ({
        url: '/forms',
        method: 'POST',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        },
        body: form
      })
    }),
    updateForm: build.mutation<
      IForm, 
      { formId: string, content: IFormContent }
    >({
      query: (form) => ({
        url: '/forms',
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        },
        body: form
      })
    }),
  })
})

export const {
  useGetFormQuery,
  useGetMyFormsQuery,
  useAddFormMutation,
  useUpdateFormMutation
} = formApi;