import { ChangeEvent, FC } from 'react';
import { 
  Typography, 
  TextField as TextFieldMUI
} from '@mui/material';

import { TextFieldProps } from '../types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import styles from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
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
        type: 'text',
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
      <TextFieldMUI 
        variant="outlined" 
        className={styles.textField}
        value={value}
        placeholder={placeholder}
        onChange={onChangeValue}
      />
    </div>
  )
}

export default TextField;