import React from 'react'
import { useAdd } from './useAdd'

const Add = () => {
  const {
    state: { inputText, error },
    actions: { handleInputChange, handleAddClick }
  } = useAdd()
  return (
    <>
      <div className="flex items-center w-full max-w-md mb-3">
        <div className="relative w-full mr-1">
          <input
            type="text"
            placeholder="Añadir un elemento"
            value={inputText}
            onChange={handleInputChange}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddClick}
          className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Añadir
        </button>
      </div>
      {error && (
        <p className="py-4 ml-2 text-sm italic font-bold text-red-500">
          Debes ingresar algo que desees añadir
        </p>
      )}
    </>
  )
}

export default Add
