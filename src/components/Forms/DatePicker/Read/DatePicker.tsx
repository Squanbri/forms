import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers';
import { DatePickerProps } from '../types';
import { ru } from 'date-fns/locale'

import styles from './DatePicker.module.scss';

const DatePicker: FC<DatePickerProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
}) => {
  return (
    <div className={styles.container}>
      <Typography variant='subtitle2'>{question}</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <DatePickerMUI
          value={Date.now()}
          onChange={(newValue) => {
            console.log(newValue);
          }}
          renderInput={(params) => 
            <TextField {...params} 
          />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
