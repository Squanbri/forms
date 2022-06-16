import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetFormQuery } from 'services/FormService';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import SurveyTitle from 'components/Survey/SurveyTitle/SurveyTitle';
import QuestionList from './QuestionList';
import SurveyButtons from './SurveyButtons';
import SurveyTools from 'components/Survey/SurveyTools/SurveyTools';
import AnswerSwitch from 'components/Survey/AnswerSwitch/AnswerSwitch';
import Snackbar from 'components/Survey/Snackbar/Snackbar';
import styles from './Survey.module.scss';

const Survey: FC = () => {
  const { id } = useParams() as { id: string };
  const { setSurvey } = surveySlice.actions;
  const dispatch = useAppDispatch();
  const { isAnswersMode } = useAppSelector(state => state.surveyReducer);
  const { data, isLoading } = useGetFormQuery(id);

  useEffect(() => {
    if (data !== undefined) {
      dispatch(setSurvey({
        snackbarText: '',
        snackbarActive: false,
        answers: data?.answers ?? [],
        isAnswersMode: false,
        answerIndex: 0,
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

  if (isAnswersMode) {
    return (
      <section className={styles.survey}>
        <form>
          <AnswerSwitch />

          <QuestionList />

          <SurveyTools />
        </form>
      </section>
    )
  }

  return (
    <section className={styles.survey}>
      <form>
        <SurveyTitle />

        <QuestionList />

        <SurveyButtons />

        <SurveyTools />

        <Snackbar />
      </form>
    </section>
  );
};

export default Survey;