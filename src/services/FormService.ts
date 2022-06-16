import { IQuestion } from 'components/Survey/Question/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IForm {
  id: string;
  content: IFormContent;
  userId: boolean;
  createdAt: string;
  updatedAt: string;
  answers?: object[];
}

interface IFormContent {
  typeForm: 'survey';
  title: string;
  questions: IQuestion[];
}

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  tagTypes: ['Form'],
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
      }),
      providesTags: result => ['Form']
    }),
    addForm: build.mutation<IForm, IFormContent>({
      query: (form) => ({
        url: '/forms',
        method: 'POST',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        },
        body: form
      }),
      invalidatesTags: ['Form']
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
    deleteForm: build.mutation<
      void, 
      string
    >({
      query: (formId) => ({
        url: '/forms',
        method: 'DELETE',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token_auth')}`
        },
        body: {formId}
      }),
      invalidatesTags: ['Form']
    }),
  })
})

export const {
  useGetFormQuery,
  useGetMyFormsQuery,
  useAddFormMutation,
  useUpdateFormMutation,
  useDeleteFormMutation
} = formApi;