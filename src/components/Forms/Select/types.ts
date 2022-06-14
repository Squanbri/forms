type radioItem = {
  text: string
}

export interface SelectProps {
  question?: string,
  items?: radioItem[],
  index?: number,
}