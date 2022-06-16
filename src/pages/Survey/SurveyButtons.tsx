import { FC } from 'react';
import { Button } from '@mui/material';

import { useAppSelector } from 'hooks/redux';
import SurveyTools from 'components/Survey/SurveyTools/SurveyTools';
import { useUpdateFormMutation } from 'services/FormService';
import { useAddAnswerMutation } from 'services/AnswersService';
import styles from './Survey.module.scss';

const SurveyButtons: FC = () => {
  const { isEditMode, title, questions, formId } = useAppSelector(
    (state) => state.surveyReducer
  );
  const [updateForm] = useUpdateFormMutation();
  const [addAnswer] = useAddAnswerMutation();

  const onSave = () => {
    updateForm({
      formId,
      content: {
        typeForm: 'survey',
        title,
        questions,
      },
    });
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
