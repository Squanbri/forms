import { ChangeEvent, FC } from 'react';
import {
  FormControl,
  TextField as TextFieldMUI,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import { SelectProps } from '../types';

import styles from './Select.module.scss';

const Select: FC<SelectProps> = ({ question = 'Без названия', items, index }) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onRemoveOpinion = (opinionIndex: number) => {
    if (index !== undefined && typeof items === 'object') {
      const newItems = [...items];
      newItems.splice(opinionIndex, 1);
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'select',
          question: {
            question,
            items: newItems
          },
        } 
      }));
    } 
  }

  const onChangeOpinionText = (
    event: ChangeEvent<HTMLInputElement>,
    opinionIndex: number,
  ) => {
    if (index !== undefined && typeof items === 'object') {
      const newItems = [...items];
      newItems.splice(opinionIndex, 1, {
        text: event.target.value
      });
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'select',
          question: {
            question,
            items: newItems
          },
        } 
      }));
    } 
  }

  const onAddOpinion = () => {
    if (index !== undefined && typeof items === 'object') {
      const newOpinion = {
        text: `Вариант ${items?.length + 1}`
      }
      const newItems = [...items, newOpinion];

      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'select',
          question: {
            question,
            items: newItems
          },
        } 
      }));
    }
  }

  return (
    <div className={styles.container}>
      <FormControl size='small' className={styles.form}>
        <ol className={styles.items}>
          {items?.map((item, index) => (
            <li key={index}>
              <span>{index + 1}.</span>

              <TextFieldMUI
                variant='standard'
                className={styles.radioTextField}
                value={item.text}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeOpinionText(event, index)}
                size='small'
              />

              {items.length > 1 &&
                <IconButton aria-label='cart' onClick={() => onRemoveOpinion(index)}>
                  <ClearIcon fontSize='small' />
                </IconButton>
              }
            </li>
          ))}

          <li>
            <input 
              className={styles.radioAddBtn}
              onClick={onAddOpinion}
              type='text'
              readOnly
              value='Добавить вариант'
            />
          </li>
        </ol>
      </FormControl>
    </div>
  );
};

export default Select;
