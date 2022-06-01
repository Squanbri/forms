import TextFieldRead from 'components/Forms/TextField/Read/TextField';
import TextFieldEdit from 'components/Forms/TextField/Edit/TextField';
import RadioRead from 'components/Forms/Radio/Read/Radio';
import RadioEdit from 'components/Forms/Radio/Edit/Radio';
import CheckBoxRead from 'components/Forms/Checkbox/Read/CheckBox';
import CheckBoxEdit from 'components/Forms/Checkbox/Edit/CheckBox';

export const questionTypeComponents = {
  text: {
    read: <TextFieldRead/>,
    edit: <TextFieldEdit/>
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
    read: <RadioRead/>,
    edit: <TextFieldEdit/>
  }
}