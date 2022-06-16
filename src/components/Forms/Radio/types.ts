type radioItem = {
  text: string,
  checked?: boolean
}

export interface RadioProps {
  question?: string,
  items?: radioItem[],
  index?: number,
}