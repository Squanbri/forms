type selectItem = {
  text: string,
  checked?: boolean
}

export interface SelectProps {
  question?: string,
  items?: selectItem[],
  index?: number,
}