import { useAppSelector } from 'hooks/redux';
import Question from 'components/Survey/Question/Question';
import { IQuestion } from 'components/Survey/Question/types';
import styles from './Survey.module.scss';

const QuestionList = () => {  
  const { isAnswersMode, answers, answerIndex, questions } = useAppSelector(state => state.surveyReducer);
  
  if (isAnswersMode) {
    const answer = answers?.[answerIndex] as any;
    const content = answer.content as any;
    const questions = content.questions as IQuestion[];

    return (
      <>
        {questions?.map((question, index) => {
          return (
            <div className={styles.disabled} key={index}>
              <Question 
                type={question?.type}
                question={question}
                index={index}
                value={question?.value}
              />
            </div>
          )
        })} 
      </>
    )
  }

  return (
    <>
     {questions?.map((question, index) => 
        <Question 
          key={index}
          type={question.type}
          question={question}
          index={index}
        />
      )} 
    </>
  )
}

export default QuestionList;