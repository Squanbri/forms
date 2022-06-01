import { FC } from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { TextFieldProps } from '../types';

import styles from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
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

export default TextField;
