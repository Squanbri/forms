import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IQuestion } from 'components/Survey/Question/types';

interface SurveyState {
  snackbarText: string;
  snackbarActive: boolean;
  answers?: object[];
  isAnswersMode: boolean;
  answerIndex: number;
  isEditMode: boolean;
  formId: string;
  title: string;
  editableQuestion: number | null;
  questions: IQuestion[];
}

const initialState: SurveyState = {
  snackbarText: '',
  snackbarActive: false,
  answers: [],
  formId: '',
  isAnswersMode: false,
  answerIndex: 0,
  isEditMode: false,
  title: 'Название опроса',
  editableQuestion: null,
  questions: [],
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    changeAnswerMode(state, action: PayloadAction<boolean>) {
      state.isAnswersMode = action.payload;
      state.editableQuestion = null;
    },
    setAnswerIndex(state, action: PayloadAction<number>) {
      state.answerIndex = action.payload;
    },
    setSurvey(state, action: PayloadAction<SurveyState>) {
      state.answers = action.payload.answers;
      state.formId = action.payload.formId;
      state.isEditMode = action.payload.isEditMode;
      state.title = action.payload.title;
      state.editableQuestion = null;
      state.questions = action.payload.questions ?? [];
    },
    setTitle(state, action: PayloadAction<string>) {
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
    setQuestionProperty(
      state, 
      action: PayloadAction<{index: number, value: object}>
    ) {
      state.questions[action.payload.index] = { 
        ...state.questions[action.payload.index], 
        ...action.payload.value
      };
    },
    setSnackbarProperty(state, action: PayloadAction<{ text: string, active: boolean }>) {
      state.snackbarActive = action.payload.active;
      state.snackbarText = action.payload.text;
    },
  }
});

export default surveySlice.reducer;