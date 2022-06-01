import { IQuestion } from 'components/Survey/Question/types';
import { QuestionVariants } from '../Question/types'

export interface QuestionLabelProps {
  question: IQuestion 
  index: number,
}

export type QuestionTypeElement = {
  label: string,
  value: string,
  initialValue: QuestionVariants
}