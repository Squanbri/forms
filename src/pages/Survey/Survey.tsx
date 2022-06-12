import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetFormQuery } from 'services/FormService';
import SurveyTitle from 'components/Survey/SurveyTitle/SurveyTitle';
import QuestionList from './QuestionList';
import SurveyButtons from './SurveyButtons';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import styles from './Survey.module.scss';

const Survey: FC = () => {
  const { id } = useParams() as { id: string };
  const { setSurvey } = surveySlice.actions;
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetFormQuery(id);

  useEffect(() => {
    if (data !== undefined) {
      console.log(data.id)
      dispatch(setSurvey({
        formId: data.id,
        isEditMode: data.userId,
        title: data.content.title,
        editableQuestion: null,
        questions: data.content.questions
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <div>Загрузка...</div>

  return (
    <section className={styles.survey}>
      <form>
        <SurveyTitle />

        <QuestionList />

        <SurveyButtons />
      </form>
    </section>
  );
};

export default Survey;