import { useState } from "react"

type AuthUser = {
    name : string,
    email : string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name : 'Gem',
            email : 'gem92@hotmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name : {user?.name}</div>
            <div>User Email : {user?.email}</div>
        </div>
    )
}