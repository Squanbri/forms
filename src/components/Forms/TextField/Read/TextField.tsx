import { FC } from 'react';
import { 
  Typography, 
  TextField as TextFieldMUI
} from '@mui/material';
import { TextFieldProps } from '../types';

import styles from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
}) => {
  return (
    <div className={styles.container}>
      <Typography variant="subtitle2">{question}</Typography>
      <TextFieldMUI 
        variant="outlined" 
        className={styles.textField}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField;