import { createContext, useContext, useState } from 'react'
import questions from '../data'

const globalAppContext = createContext()

function AppContext ({ children }) {
  const [panels, setPanels] = useState(questions)
  const [openedPanelId, setOpenedPanelId] = useState(null)

  function togglePanel (id) {
    const newOpenedPanelId = id === openedPanelId ? null : id
    setOpenedPanelId(newOpenedPanelId)
  }
  return (
    <globalAppContext.Provider
      value={{
        panels,
        openedPanelId,
        togglePanel
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
