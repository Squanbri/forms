import { TextFieldProps } from 'components/Forms/TextField/types';
import { RadioProps } from 'components/Forms/Radio/types';

export type QuestionTypes = 'text' | 'radio' | 'checkbox' | 'select';

export type QuestionVariants = TextFieldProps | RadioProps;

export interface QuestionProps {
  type: QuestionTypes,
  question: IQuestion,
  index: number,
}

export interface IQuestion {
  type: QuestionTypes,
  question: QuestionVariants,
  require?: boolean,
}