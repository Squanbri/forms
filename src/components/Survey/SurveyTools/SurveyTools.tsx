import { FC } from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useAppDispatch } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';
import styles from './SurveyTools.module.scss';

const SurveyTools: FC = () => {
  const { addQuestion } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    dispatch(addQuestion({
      type: 'text',
      question: {
        question: 'Вопрос1',
        placeholder: 'Подсказка1'
      }
    }));
  };

  return (
    <div className={styles.container}>
      <IconButton aria-label='cart' onClick={onClickAdd}>
        <AddIcon fontSize='small' />
      </IconButton>
    </div>
  );
};

export default SurveyTools;
