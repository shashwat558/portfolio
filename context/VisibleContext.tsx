"use client"
import { createContext, useContext, useState } from "react"

export const VisibleContext = createContext<{
  visible: boolean
  setVisible: (visible: boolean) => void
}>({
  visible: false,
  setVisible: () => {},
})

export const VisibleProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false)
  return <VisibleContext.Provider value={{ visible, setVisible }}>{children}</VisibleContext.Provider>
}

export const useVisible = () => {
  return useContext(VisibleContext)
}