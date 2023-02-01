import { useState } from "react"


export const LoggedIn = () => {

    const [login, setLogin] = useState(false)

    const handleLogin = () => {
        setLogin(true)
    }

    const handleLogout = () => {
        setLogin(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>user {login ? 'login' : 'logout'}</div>
        </div>
    )
}