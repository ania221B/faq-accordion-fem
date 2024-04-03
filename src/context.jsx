import { createContext, useContext, useState } from 'react'

const globalAppContext = createContext()

function AppContext ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <globalAppContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </globalAppContext.Provider>
  )
}
export default AppContext

export function useAppGlobalContext () {
  return useContext(globalAppContext)
}
