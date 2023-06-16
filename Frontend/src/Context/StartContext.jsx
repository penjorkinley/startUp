import { createContext } from "react"

export const StartContext = createContext(null)



export const StartContextProvider = () => {



    const contextValue = {}
  return (
    <StartContextProvider value={contextValue}></StartContextProvider>
  )
}
