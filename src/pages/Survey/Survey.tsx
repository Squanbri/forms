import { FC } from 'react';
import { Button } from '@mui/material';

import { useAppSelector } from 'hooks/redux';
import SurveyTools from 'components/Survey/SurveyTools/SurveyTools';
import SurveyTitle from 'components/Survey/SurveyTitle/SurveyTitle';
import QuestionList from './QuestionList';
import styles from './Survey.module.scss';

const Survey: FC = () => {
  const { isEditMode } = useAppSelector((state) => state.surveyReducer);

  return (
    <section className={styles.survey}>
      <form action=''>
        <SurveyTitle />

        <QuestionList />

        {isEditMode ? (
          <SurveyTools />
        ) : (
          <div className={styles.buttons}>
            <Button variant='contained'>Отправить</Button>
            <Button variant='text' type='reset'>
              Очистить форму
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Survey;
