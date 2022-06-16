import { FC, useState } from 'react';
import {
  FormControl,
  Select as SelectMUI,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from '@mui/material';

import { SelectProps } from '../types';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import styles from './Select.module.scss';

const Select: FC<SelectProps> = ({ 
  question = 'Без названия', 
  items,
  index = 0
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(items?.[0]?.text ?? '');

  const checkedValues = items?.find(item => item.checked === true);

  const onChangeOpinionText = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value)

    if (index !== undefined && typeof items === 'object') {
      const newItems = items.map((item) => {
        if (item.text === event.target.value) {
          return { ...item, checked: true }
        } else {
          return { ...item, checked: false}
        }
      });
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'select',
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
      <FormControl size='small' className={styles.formControl}>
        <Typography variant='subtitle2'>{question}</Typography>

        <SelectMUI 
          className={styles.select} 
          onChange={onChangeOpinionText}
          value={checkedValues?.text ?? value}
        > 
          {items?.map((item, index) => (
            <MenuItem 
              key={index}
              value={item.text}
            >
              {item.text}
            </MenuItem>
          ))}
        </SelectMUI>
      </FormControl>
    </div>
  );
};

export default Select;