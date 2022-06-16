import { FC } from 'react';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useUpdateFormMutation } from 'services/FormService';
import { useAddAnswerMutation } from 'services/AnswersService';
import styles from './Survey.module.scss';
import { surveySlice } from 'store/reducers/SurveySlice';

const SurveyButtons: FC = () => {
  const { isEditMode, title, questions, formId } = useAppSelector(
    (state) => state.surveyReducer
  );
  const { setSnackbarProperty } = surveySlice.actions;
  const [updateForm] = useUpdateFormMutation();
  const [addAnswer] = useAddAnswerMutation();
  const dispatch = useAppDispatch();

  const onSave = () => {
    updateForm({
      formId,
      content: {
        typeForm: 'survey',
        title,
        questions,
      },
    });

    dispatch(setSnackbarProperty({
      text: 'Форма сохранена', 
      active: true
    }));
  };

  const onAnswer = () => {
    addAnswer({
      formId,
      content: {
        typeForm: 'survey',
        title,
        questions,
      },
    });
  };

  return (
    <>
      {isEditMode ? (
        <div className={styles.buttons}>
          <Button variant='contained' onClick={onSave}>
            Сохранить
          </Button>
          <Button variant='text' type='reset'>
            Отменить
          </Button>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button variant='contained' onClick={onAnswer}>
            Отправить
          </Button>
          <Button variant='text' type='reset'>
            Очистить форму
          </Button>
        </div>
      )}
    </>
  );
};

export default SurveyButtons;
