import { ChangeEvent, FC } from 'react';
import {
  FormControl,
  RadioGroup,
  TextField as TextFieldMUI,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import { CheckBoxProps } from '../types';

import styles from './CheckBox.module.scss';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';

const CheckBox: FC<CheckBoxProps> = ({ question = 'Без названия', items, index }) => {
  const { setQuestionProperty } = surveySlice.actions;
  const dispatch = useAppDispatch();
  
  const onRemoveOpinion = (opinionIndex: number) => {
    if (index !== undefined && typeof items === 'object') {
      const newItems = [...items];
      newItems.splice(opinionIndex, 1);
      
      dispatch(setQuestionProperty({
        index, 
        value: {
          type: 'checkbox',
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
          type: 'checkbox',
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
          type: 'checkbox',
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
        <RadioGroup className={styles.radios}>
          {items?.map((item, index) => (
            <li key={index}>
              <CheckBoxOutlineBlankIcon/>

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
            <button 
              className={styles.radioAddBtn}
              onClick={onAddOpinion}
            >
              Добавить вариант
            </button>
          </li>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CheckBox;
