import { initialValuesTextField } from 'components/Forms/TextField/initialValues';
import { initialValuesRadio } from 'components/Forms/Radio/initialValues';
import { initialValuesCheckbox } from 'components/Forms/Checkbox/initialValues';

import { QuestionTypeElement } from './types';

export const typeList: QuestionTypeElement[] = [
  {
    label: 'Текст(Строка)',
    value: 'text',
    initialValue: initialValuesTextField
  },
  {
    label: 'Текст(Абзац)',
    value: 'textarea',
    initialValue: initialValuesTextField
  },
  {
    label: 'Один из списка',
    value: 'radio',
    initialValue: initialValuesRadio
  },
  {
    label: 'Несколько из списка',
    value: 'checkbox',
    initialValue: initialValuesCheckbox
  },
  {
    label: 'Выпадающий список',
    value: 'select',
    initialValue: initialValuesCheckbox
  },
  {
    label: 'Дата',
    value: 'date',
    initialValue: initialValuesCheckbox
  },
];