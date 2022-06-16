import TextFieldRead from 'components/Forms/TextField/Read/TextField';
import TextFieldEdit from 'components/Forms/TextField/Edit/TextField';
import TextAreaRead from 'components/Forms/TextArea/Read/TextArea';
import TextAreaEdit from 'components/Forms/TextArea/Edit/TextArea';
import RadioRead from 'components/Forms/Radio/Read/Radio';
import RadioEdit from 'components/Forms/Radio/Edit/Radio';
import CheckBoxRead from 'components/Forms/Checkbox/Read/CheckBox';
import CheckBoxEdit from 'components/Forms/Checkbox/Edit/CheckBox';
import SelectRead from 'components/Forms/Select/Read/Select';
import SelectEdit from 'components/Forms/Select/Edit/Select';
import DatePickerRead from 'components/Forms/DatePicker/Read/DatePicker';
import DatePickerEdit from 'components/Forms/DatePicker/Edit/DatePicker';

export const questionTypeComponents = {
  text: {
    read: <TextFieldRead/>,
    edit: <TextFieldEdit/>
  },
  textarea: {
    read: <TextAreaRead/>,
    edit: <TextAreaEdit/>
  },
  radio: {
    read: <RadioRead/>,
    edit: <RadioEdit/>
  },
  checkbox: {
    read: <CheckBoxRead/>,
    edit: <CheckBoxEdit/>
  },
  select: {
    read: <SelectRead/>,
    edit: <SelectEdit/>
  },
  date: {
    read: <DatePickerRead/>,
    edit: <DatePickerEdit/>
  }
}