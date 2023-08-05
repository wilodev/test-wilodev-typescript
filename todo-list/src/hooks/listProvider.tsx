import { Item, ListContextType } from '@/types/default'
import React, { createContext, useState, useContext } from 'react'

const ListContext = createContext<ListContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {}
})

export const useListContext = () => useContext(ListContext)

export const ListProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => {
    const newItem: Item = {
      id: Date.now(),
      text
    }
    setItems((prevItems) => [...prevItems, newItem])
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <ListContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ListContext.Provider>
  )
}
