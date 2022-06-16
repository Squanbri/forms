import { ChangeEvent, FC } from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { TextFieldProps } from '../types';
import { useAppDispatch } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';
import styles from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
  index = 0,
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangePlaceholder = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setQuestionProperty({
      index, 
      value: {
        type: 'text',
        question: {
          question,
          placeholder: event.target.value,
        },
      } 
    })); 
  }

  return (
    <div className={styles.container}>
      <TextFieldMUI
        variant='standard'
        className={styles.textField}
        placeholder={placeholder}
        defaultValue={value}
        size='small'
        onChange={onChangePlaceholder}
      />
    </div>
  );
};

export default TextField;
