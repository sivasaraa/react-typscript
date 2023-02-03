import { useContext } from "react"
import { ThemeProvider } from "./ThemeContext"


export const Box = () => {
    const theme = useContext(ThemeProvider)

    return (
        <div style={{background:theme.primary.main, color:theme.primary.text}}>Hello Theme</div>
    )
}