import { cloneElement, FC } from 'react';
import clsx from 'clsx';

import { QuestionProps } from './types';
import QuestionTools from '../QuestionTools/QuestionTools';
import QuestionLabel from '../QuestionLabel/QuestionLabel';

import { surveySlice } from 'store/reducers/SurveySlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { questionTypeComponents } from '../questionTypeComponents';
import styles from './Question.module.scss';

const Question: FC<QuestionProps> = ({
  type,
  question,
  index,
}) => {  
  const { isAnswersMode, isEditMode, editableQuestion } = useAppSelector(state => state.surveyReducer);
  const { selectEditableQuestion } = surveySlice.actions;
  const dispatch = useAppDispatch();

  const readElement = questionTypeComponents[type].read;
  const editElement = questionTypeComponents[type].edit;
  const isEditQuestion = index === editableQuestion;

  const onClickQuestion = () => {
    if (isAnswersMode) return;

    dispatch(selectEditableQuestion(index));
  }

  const questionEditableClasses = clsx({
    [styles.container]: true,
    [styles.editableContainer]: true,
  });

  const questionClasses = clsx({
    [styles.container]: true,
    [styles.disableEvents]: isEditMode && !isEditQuestion
  });

  if (isEditQuestion && isEditMode) {
    return (
      <div 
        onClick={onClickQuestion}
        className={questionEditableClasses}
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
      className={questionClasses}
    >
      {cloneElement(readElement, { 
        ...question.question,
        index
      })}
    </div>
  )
}

export default Question;