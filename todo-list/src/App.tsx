import { Add } from './components/Add'
import { List } from './components/List'
import { ListProvider } from './hooks/listProvider'

function App() {
  return (
    <ListProvider>
      <main className="bg-gray-200 dark:bg-gray-900 flex w-full">
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
          <h1 className="text-2xl font-bold py-4">Lista de elementos</h1>
          <Add />
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
            <List />
          </div>
        </div>
      </main>
    </ListProvider>
  )
}

export default App
