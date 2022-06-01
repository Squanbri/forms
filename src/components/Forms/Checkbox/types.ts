type checkBoxItem = {
  text: string
}

export interface CheckBoxProps {
  question?: string,
  items?: checkBoxItem[],
  index?: number,
}