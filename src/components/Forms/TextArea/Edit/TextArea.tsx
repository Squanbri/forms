import { FC } from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { TextAreaProps } from '../types';

import styles from './TextArea.module.scss';

const TextField: FC<TextAreaProps> = ({
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
