import { FC } from 'react';
import {
  FormControl,
  Select as SelectMUI,
  MenuItem,
  Typography,
} from '@mui/material';

import { SelectProps } from '../types';

import styles from './Select.module.scss';

const Select: FC<SelectProps> = ({ question = 'Без названия', items }) => {
  return (
    <div className={styles.container}>
      <FormControl size='small' className={styles.formControl}>
        <Typography variant='subtitle2'>{question}</Typography>

        <SelectMUI className={styles.select}> 
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