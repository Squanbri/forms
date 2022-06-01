import { cloneElement, FC } from 'react';
import clsx from 'clsx';

import { QuestionProps } from './types';
import QuestionTools from '../QuestionTools/QuestionTools';
import QuestionLabel from '../QuestionLabel/QuestionLabel';

import styles from './Question.module.scss';
import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { questionTypeComponents } from '../questionTypeComponents';

const Question: FC<QuestionProps> = ({
  type,
  question,
  index,
}) => {  
  const { editableQuestion } = useAppSelector(state => state.surveyReducer);
  const { selectEditableQuestion } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const readElement = questionTypeComponents[type].read;
  const editElement = questionTypeComponents[type].edit;
  const isEditMode = index === editableQuestion;

  const onClickQuestion = () => {
    dispatch(selectEditableQuestion(index));
  }

  const questionClasses = clsx({
    [styles.container]: true,
    [styles.editableContainer]: true
  });

  if (isEditMode) {
    return (
      <div 
        onClick={onClickQuestion}
        className={questionClasses}
      >
        <QuestionLabel question={question} index={index}/>
        {cloneElement(editElement, { 
          ...question.question,
          index
        })}
        <QuestionTools question={question} index={index}/>
      </div>
    )
  }

  return (
    <div 
      onClick={onClickQuestion}
      className={styles.container}
    >
      {cloneElement(readElement, { 
        ...question.question
      })}
    </div>
  )
}

export default Question;