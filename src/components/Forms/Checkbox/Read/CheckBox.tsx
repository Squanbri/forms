import { ChangeEvent, FC, SyntheticEvent } from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox as CheckboxMUI,
  RadioGroup,
  Typography,
} from '@mui/material';

import { CheckBoxProps } from '../types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import styles from './CheckBox.module.scss';

const CheckBox: FC<CheckBoxProps> = ({ 
  question = 'Без названия', 
  items,
  index = 0
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onSelectOpinion = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (index !== undefined && typeof items === 'object') {
      const value = event.target.value;

      const newItems = items.map((item) => {
        if (item.text === value) {
          return { ...item, checked: !item.checked }
        } else {
          return { ...item, checked: item.checked}
        }
      });
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'checkbox',
          question: {
            question,
            items: newItems
          },
        } 
      }));
    } 
  }

  return (
    <div className={styles.container}>
      <FormControl size='small'>
        <Typography variant='subtitle2'>{question}</Typography>
        <RadioGroup className={styles.radios}>
          {items?.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.text}
              control={<CheckboxMUI size='small' onChange={onSelectOpinion} />}
              label={item.text}
              checked={item.checked ?? false}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CheckBox;
