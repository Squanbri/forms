import { IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './AnswerSwitch.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';

const AnswerSwitch: FC = () => {
  const { answerIndex, answers } = useAppSelector((state) => state.surveyReducer);
  const { setAnswerIndex } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onPrevAnswer = () => {
    const prevIndex = answerIndex - 1;

    if (prevIndex >= 0) {
      dispatch(setAnswerIndex(prevIndex));
    }
  }

  const onNextAnswer = () => {
    const nextIndex = answerIndex + 1;
    const length = answers?.length as number;

    if (nextIndex < length) {
      dispatch(setAnswerIndex(nextIndex));
    }
  }

  return (
    <div className={styles.container}>
      <Typography 
        variant="h4" 
        gutterBottom 
        component="div"
        className={styles.title}
      >
        Ответ
      </Typography>
      
      <div className={styles.switch}>
        <IconButton aria-label='cart' onClick={onPrevAnswer}>
          <ArrowBackIosNewIcon fontSize='small' />
        </IconButton>
        <span>{answerIndex + 1} из {answers?.length ?? 0}</span>
        <IconButton aria-label='cart' onClick={onNextAnswer}>
          <ArrowForwardIosIcon fontSize='small' />
        </IconButton>
      </div>
    </div>
  )
}

export default AnswerSwitch;