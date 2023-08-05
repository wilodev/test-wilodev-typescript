import React from 'react'
import { useListContext } from '../../hooks/listProvider'
import { Item } from '@/types/default'

const List = () => {
  const { items, removeItem } = useListContext()
  return (
    <>
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.length > 0 ? (
          items.map((item: Item) => (
            <li
              className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={item.id}
              onClick={() => removeItem(item.id)}
            >
              {item.text}
            </li>
          ))
        ) : (
          <p className="p-10">No existe elementos en la lista</p>
        )}
      </ul>
      {items.length > 0 && (
        <p className="p-2 mr-2 text-sm text-gray-400 text-end">
          Elementos totales: {items.length}
        </p>
      )}
    </>
  )
}

export default List
