type checkBoxItem = {
  text: string;
  checked?: boolean;
}

export interface CheckBoxProps {
  question?: string;
  items?: checkBoxItem[];
  index?: number;
}