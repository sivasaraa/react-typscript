import React from "react"
import {theme} from './Theme'

type themeProps = {
    children : React.ReactNode
}

export const ThemeProvider = React.createContext(theme)

export const ThemeContext = (props : themeProps) => {
    return (
        <ThemeProvider.Provider value={theme}>
            {props.children}
        </ThemeProvider.Provider>
    )
}