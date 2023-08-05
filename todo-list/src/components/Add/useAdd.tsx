import { useListContext } from '../../hooks/listProvider'
import { HookOutput } from '@/hooks/types'
import { useState } from 'react'

export const useAdd = (): HookOutput => {
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState(false)
  const { addItem } = useListContext()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleAddClick = () => {
    if (inputText.trim() !== '') {
      addItem(inputText)
      setInputText('')
    } else {
      setError(true)
    }
  }

  return {
    state: { inputText, error },
    actions: { handleInputChange, handleAddClick }
  }
}
