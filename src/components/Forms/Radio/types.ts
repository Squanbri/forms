type radioItem = {
  text: string
}

export interface RadioProps {
  question?: string,
  items?: radioItem[],
  index?: number,
}