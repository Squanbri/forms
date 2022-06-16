import { FC } from 'react';
import { IconButton, Switch, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch } from 'hooks/redux';
import { QuestionToolsProps } from './types';
import styles from './QuestionTools.module.scss';

const QuestionTools: FC<QuestionToolsProps> = ({ index, question }) => {
  const { 
    duplicateQuestion, 
    removeQuestion,
    setQuestionProperty
  } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const onCopyBtnClick = (event: any) => {
    event.stopPropagation()
    dispatch(duplicateQuestion(index))
  }

  const onRemoveBtnClick = (event: any) => {
    event.stopPropagation()
    dispatch(removeQuestion(index))
  }

  const onSwitchRequire = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    event.stopPropagation();
    dispatch(setQuestionProperty({
      index, 
      value: {
        ...question,
        require: checked
      } 
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <IconButton aria-label='cart' onClick={onCopyBtnClick}>
          <ContentCopyIcon fontSize='small' />
        </IconButton>
        <IconButton aria-label='cart' onClick={onRemoveBtnClick}>
          <DeleteIcon fontSize='small' />
        </IconButton>
      </div>
      <div className={styles.separator} />
      <div className={styles.right}>
        <div className={styles.requirement}>
          <Typography
            variant="caption"
            component='small'
          >
            Обязательный вопрос
          </Typography>
          <Switch 
            color='error' 
            size='small' 
            onChange={onSwitchRequire}
            checked={!!question.require}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionTools;
