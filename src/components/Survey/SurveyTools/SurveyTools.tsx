import { FC } from 'react';
import { Badge, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';
import styles from './SurveyTools.module.scss';
import { useDeleteFormMutation } from 'services/FormService';
import { useNavigate } from 'react-router-dom';
import { staticLinks } from 'assets/exportData/links';

const SurveyTools: FC = () => {
  const { answers, formId, isEditMode, isAnswersMode } = useAppSelector(
    (state) => state.surveyReducer
  );
  const { addQuestion, changeAnswerMode } = surveySlice.actions;
  const dispatch = useAppDispatch();
  const [deleteForm] = useDeleteFormMutation();
  const navigate = useNavigate();
  const answersCount = answers?.length as number; 

  const onClickAdd = () => {
    dispatch(
      addQuestion({
        type: 'text',
        question: {
          question: 'Вопрос1',
          placeholder: 'Подсказка1',
        },
      })
    );
  };

  const onToggleAnswers = () => {
    dispatch(changeAnswerMode(!isAnswersMode));
  };

  const onDeleteForm = () => {
    deleteForm(formId);
    navigate(staticLinks.myForms);
  }

  if (isEditMode === false) return null;

  if (!isAnswersMode) {
    return (
      <div className={styles.container}>
        <IconButton
          aria-label='cart'
          onClick={onClickAdd}
          title='Добавить вопрос'
        >
          <AddIcon fontSize='small' />
        </IconButton>
        {answersCount > 0 &&
          <IconButton
            aria-label='cart'
            title={'Посмотреть ответы'}
            onClick={onToggleAnswers}
          >
            <Badge badgeContent={answersCount} color='primary' className={styles.badge}>
              <QuestionAnswerIcon fontSize='small' />
            </Badge>
          </IconButton>
        }
        <IconButton
          aria-label='cart'
          title={'Удалить форму опроса'}
          onClick={onDeleteForm}
        >
          <DeleteIcon fontSize='small' />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <IconButton
        aria-label='cart'
        onClick={onClickAdd}
        title='Добавить вопрос'
      >
        <AddIcon fontSize='small' />
      </IconButton>
      <IconButton
        aria-label='cart'
        title={'Посмотреть вопросы'}
        onClick={onToggleAnswers}
      >
        <QuizIcon fontSize='small' />
      </IconButton>
    </div>
  );
};

export default SurveyTools;
