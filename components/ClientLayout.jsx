'use client'
import { ThemeProvider } from '@/clientSide'

const ClientLayout = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ClientLayout
