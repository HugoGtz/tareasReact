import React from 'react'

const ThemeContext = React.createContext({
    theme:'dark'
})

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer