import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IQuestion } from 'components/Survey/Question/types';

interface SurveyState {
  isEditMode: boolean,
  title: string,
  editableQuestion: number | null,
  questions: IQuestion[],
}

interface setQuestionPropertyArguments {
  index: number,
  value: object
}

const initialState: SurveyState = {
  isEditMode: false,
  title: 'Название опроса',
  editableQuestion: null,
  questions: [
    {
      type: 'text',
      question: {
        question: 'Вопрос1',
        placeholder: 'Подсказка1'
      }
    },
    {
      type: 'radio',
      question: {
        question: 'Вопрос2',
        items: [
          { text: 'Вариант 1' },
          { text: 'Вариант 2' },
          { text: 'Вариант 3' },
        ]
      }
    },
    {
      type: 'checkbox',
      question: {
        question: 'Вопрос3',
        items: [
          { text: 'Вариант 1' },
          { text: 'Вариант 2' },
          { text: 'Вариант 3' },
        ]
      }
    },
  ],
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      console.log(state)
      state.title = action.payload;
    },
    addQuestion(state, action: PayloadAction<IQuestion>) {
      state.questions.push(action.payload);
    },
    selectEditableQuestion(state, action: PayloadAction<number | null>) {
      state.editableQuestion = action.payload;
    },
    duplicateQuestion(state, action: PayloadAction<number>) {
      const questionByIndex = state.questions[action.payload];
      state.questions.splice(action.payload, 0, questionByIndex);

      state.editableQuestion = action.payload + 1;
    },
    removeQuestion(state, action: PayloadAction<number>) {
      state.questions.splice(action.payload, 1);

      state.editableQuestion = null;
    },
    setQuestionProperty(state, action: PayloadAction<setQuestionPropertyArguments>) {
      state.questions[action.payload.index] = { 
        ...state.questions[action.payload.index], 
        ...action.payload.value
      };
    }
  }
});

export default surveySlice.reducer;