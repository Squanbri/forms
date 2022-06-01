import { FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox as CheckboxMUI,
  RadioGroup,
  Typography,
} from '@mui/material';

import { CheckBoxProps } from '../types';

import styles from './CheckBox.module.scss';

const CheckBox: FC<CheckBoxProps> = ({ question = 'Без названия', items }) => {
  return (
    <div className={styles.container}>
      <FormControl size='small'>
        <Typography variant='subtitle2'>{question}</Typography>
        <RadioGroup className={styles.radios}>
          {items?.map((item, index) => (
            <FormControlLabel
              key={index}
              value='female'
              control={<CheckboxMUI size='small' />}
              label={item.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CheckBox;
