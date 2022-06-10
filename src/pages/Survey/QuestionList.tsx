import { useAppSelector } from 'hooks/redux';
import Question from 'components/Survey/Question/Question';

const QuestionList = () => {  
  const { questions } = useAppSelector(state => state.surveyReducer);
  
  return (
    <>
     {questions.map((question, index) => 
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