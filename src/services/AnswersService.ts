import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

interface IAnswer {
  content: object;
  formId: string;
}

export const answerApi = createApi({
  reducerPath: 'answerApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (build) => ({
    addAnswer: build.mutation<void, IAnswer>({
      query: (answer) => ({
        url: '/answers',
        method: 'POST',
        body: answer
      })
    }),
  })
})

export const {
  useAddAnswerMutation
} = answerApi;