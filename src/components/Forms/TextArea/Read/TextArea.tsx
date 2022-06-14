import { FC } from 'react';
import { 
  Typography, 
  TextareaAutosize
} from '@mui/material';
import { TextAreaProps } from '../types';

import styles from './TextArea.module.scss';

const TextField: FC<TextAreaProps> = ({
  question = 'Без названия',
  placeholder = '',
  value = '',
}) => {
  return (
    <div className={styles.container}>
      <Typography variant="subtitle2">{question}</Typography>
      <TextareaAutosize 
        className={styles.textArea}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField;