import { ChangeEvent, FC } from 'react';
import { 
  MenuItem, 
  SelectChangeEvent, 
  Select,
  TextField as TextFieldMUI 
} from '@mui/material';

import { QuestionLabelProps } from './types';
import { QuestionTypes } from '../Question/types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import { typeList } from './QuestionTypeItem';

import styles from './QuestionLabel.module.scss';

const QuestionLabel: FC<QuestionLabelProps> = ({ question, index }) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onChangeQuestionText = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestionProperty({
      index, 
      value: {
        ...question,
        question: {
          ...question.question,
          question: event.target.value
        }
      } 
    }));
  }

  const onChangeQuestionType = (event: SelectChangeEvent) => {
    const type = typeList
      .find(type => type.value === event.target.value)
    
    if (type !== undefined) {
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: event.target.value as QuestionTypes,
          question: type.initialValue,
        } 
      }));
    }
  }

  return (
    <div className={styles.container}>
      <TextFieldMUI
        variant='filled'
        className={styles.textField}
        label='Вопрос'
        size='small'
        value={question.question.question}
        onChange={onChangeQuestionText}
      />

      <Select
        className={styles.select}
        size='small'
        onChange={onChangeQuestionType}
        value={question.type}
      >
        {typeList.map(type => 
          <MenuItem 
            key={type.value}
            value={type.value}
          >
            {type.label}
          </MenuItem>
        )}
      </Select>
    </div>
  );
};

export default QuestionLabel;
