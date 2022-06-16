import { ChangeEvent, FC } from 'react';
import { 
  Typography, 
  TextareaAutosize
} from '@mui/material';

import { TextAreaProps } from '../types';
import { useAppDispatch } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';
import styles from './TextArea.module.scss';

const TextField: FC<TextAreaProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
  index = 0,
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setQuestionProperty({
      index, 
      value: {
        type: 'textarea',
        question: {
          question,
          placeholder,
          value: event.target.value,
        },
      } 
    })); 
  }
  
  return (
    <div className={styles.container}>
      <Typography variant="subtitle2">{question}</Typography>
      <TextareaAutosize 
        className={styles.textArea}
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
      />
    </div>
  )
}

export default TextField;