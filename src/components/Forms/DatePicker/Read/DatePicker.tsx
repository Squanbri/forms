import { FC, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers';
import { DatePickerProps } from '../types';
import { ru } from 'date-fns/locale'

import styles from './DatePicker.module.scss';
import { useAppDispatch } from 'hooks/redux';
import { surveySlice } from 'store/reducers/SurveySlice';

const DatePicker: FC<DatePickerProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
  index = 0,
}) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(Date.now());

  const onChangeDate = (value: any) => {
    setDate(value)

    if (index !== undefined) {
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'date',
          question: {
            question,
            value: date.toString()
          },
        } 
      }));
    } 
  }

  return (
    <div className={styles.container}>
      <Typography variant='subtitle2'>{question}</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <DatePickerMUI
          value={value || date}
          onChange={onChangeDate}
          renderInput={(params) => 
            <TextField {...params} 
          />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
