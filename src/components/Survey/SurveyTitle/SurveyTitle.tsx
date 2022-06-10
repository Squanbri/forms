import { ChangeEvent, FC } from 'react';
import { TextareaAutosize, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';

import styles from './SurveyTitle.module.scss';

const SurveyTitle: FC = () => {
  const { isEditMode, title } = useAppSelector(state => state.surveyReducer);
  const { setTitle, selectEditableQuestion } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setTitle(event.target.value));
  }

  const onClickTitle = () => {
    dispatch(selectEditableQuestion(null));
  }

  if (isEditMode) {
    return (
      <TextareaAutosize
        className={styles.title}
        value={title}
        onChange={onChangeTitle}
        onClick={onClickTitle}
      />
    )
  }

  return (
    <Typography 
      variant="h4" 
      gutterBottom 
      component="div"
      className={styles.title}
    >
      {title}
    </Typography>
  )
}

export default SurveyTitle;