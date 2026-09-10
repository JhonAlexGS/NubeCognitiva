import { createContext } from 'react'

export const THEME_STORAGE_KEY = 'nc-theme'

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})
