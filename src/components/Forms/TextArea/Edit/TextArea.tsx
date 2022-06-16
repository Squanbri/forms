import { FC, ChangeEvent } from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { TextAreaProps } from '../types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';

import styles from './TextArea.module.scss';

const TextField: FC<TextAreaProps> = ({
  question = 'Без названия',
  placeholder = '',
  index = 0
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangePlaceholder = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setQuestionProperty({
      index, 
      value: {
        type: 'textarea',
        question: {
          question,
          placeholder: event.target.value
        },
      } 
    })); 
  }

  return (
    <div className={styles.container}>
      <TextFieldMUI
        variant='standard'
        className={styles.textField}
        value={placeholder}
        onChange={onChangePlaceholder}
        size='small'
      />
    </div>
  );
};

export default TextField;
