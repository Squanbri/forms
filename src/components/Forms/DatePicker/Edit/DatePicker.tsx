import { FC } from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { DatePickerProps } from '../types';

import styles from './DatePicker.module.scss';

const DatePicker: FC<DatePickerProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
}) => {
  return (
    <div className={styles.container}>
      <TextFieldMUI
        variant='standard'
        className={styles.textField}
        placeholder={placeholder}
        defaultValue={value}
        size='small'
      />
    </div>
  );
};

export default DatePicker;
