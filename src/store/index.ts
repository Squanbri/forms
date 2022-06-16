import { formApi } from '../services/FormService';
import { authApi } from '../services/AuthService';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import surveyReducer from './reducers/SurveySlice';
import { answerApi } from 'services/AnswersService';

const rootReducer = combineReducers({
  authReducer,
  surveyReducer,
  [authApi.reducerPath]: authApi.reducer,
  [formApi.reducerPath]: formApi.reducer,
  [answerApi.reducerPath]: answerApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApi.middleware, 
        formApi.middleware,
        answerApi.middleware,
      ])
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];