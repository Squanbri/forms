import { FC } from 'react';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import SurveyTools from 'components/Survey/SurveyTools/SurveyTools';
import { useUpdateFormMutation } from 'services/FormService';
import styles from './Survey.module.scss';

const SurveyButtons: FC = () => {
  const { isEditMode, title, questions, formId } = useAppSelector((state) => state.surveyReducer);
  const [updateForm] = useUpdateFormMutation();

  const onSave = () => {
    updateForm({
      formId,
      content: {
        typeForm: 'survey',
        title,
        questions,
      }
    });
  }

  return (
    <>
      {isEditMode 
      ? (
        <>
          <div className={styles.buttons}>
            <Button variant='contained' onClick={onSave}>Сохранить</Button>
            <Button variant='text' type='reset'>
              Отменить
            </Button>
          </div>
          <SurveyTools />
        </>
      ) 
      : (
        <div className={styles.buttons}>
          <Button variant='contained'>Отправить</Button>
          <Button variant='text' type='reset'>
            Очистить форму
          </Button>
        </div>
      )}
    </>
  )
}

export default SurveyButtons;