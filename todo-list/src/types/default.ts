export type Item = {
  id: number
  text: string
}

export type ListContextType = {
  items: Item[]
  addItem: (text: string) => void
  removeItem: (id: number) => void
}
