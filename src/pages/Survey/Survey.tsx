import { ChangeEvent, FC } from 'react';
import { TextField, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';
import SurveyTools from 'components/Survey/SurveyTools/SurveyTools';
import Question from 'components/Survey/Question/Question';

import styles from './Survey.module.scss';

const Survey: FC = () => {
  const { title, questions } = useAppSelector(state => state.surveyReducer);
  const { setTitle, selectEditableQuestion } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value));
  }

  const onClickTitle = () => {
    dispatch(selectEditableQuestion(null));
  }

  return (
    <section className={styles.survey}>
      <TextField 
        className={styles.title}
        value={title}
        onChange={onChangeTitle}
        onClick={onClickTitle}
      >
        Название опроса
      </TextField>

      {questions.map((question, index) => 
        <Question 
          key={index}
          type={question.type}
          question={question}
          index={index}
        />
      )}
    
      <div className={styles.buttons}>
        <Button variant='contained'>Отправить</Button>
        <Button variant="text">Очистить форму</Button>
      </div>

      <SurveyTools/>
    </section>
  );
};

export default Survey;
