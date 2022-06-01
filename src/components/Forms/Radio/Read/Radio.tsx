import { FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio as RadioMUI,
  RadioGroup,
  Typography,
} from '@mui/material';

import { RadioProps } from '../types';

import styles from './Radio.module.scss';

const Radio: FC<RadioProps> = ({ question = 'Без названия', items }) => {
  return (
    <div className={styles.container}>
      <FormControl size='small'>
        <Typography variant='subtitle2'>{question}</Typography>
        <RadioGroup className={styles.radios}>
          {items?.map((item, index) => (
            <FormControlLabel
              key={index}
              value='female'
              control={<RadioMUI size='small' />}
              label={item.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Radio;
