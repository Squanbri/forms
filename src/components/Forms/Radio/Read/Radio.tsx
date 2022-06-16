import { ChangeEvent, FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio as RadioMUI,
  RadioGroup,
  Typography,
} from '@mui/material';

import { RadioProps } from '../types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import styles from './Radio.module.scss';

const Radio: FC<RadioProps> = ({ 
  question = 'Без названия', 
  items,
  index = 0,
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onSelectOpinion = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    if (index !== undefined && typeof items === 'object') {
      const newItems = items.map((item) => {
        if (item.text === value) {
          return { ...item, checked: true }
        } else {
          return { ...item, checked: false}
        }
      });
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'radio',
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
        <RadioGroup className={styles.radios} onChange={onSelectOpinion}>
          {items?.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.text}
              control={<RadioMUI size='small' />}
              label={item.text}
              checked={item.checked}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Radio;
