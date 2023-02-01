import { useState } from "react"

type AuthUser = {
    name : string,
    email : string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name : 'Gem',
            email : 'gem92@hotmail.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User Name : {user.name}</div>
            <div>User Email : {user.email}</div>
        </div>
    )
}