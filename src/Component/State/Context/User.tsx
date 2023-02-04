import { useContext } from "react"
import { uContext } from "./UserContext"


export const User = () => {
    const context = useContext(uContext)

    const login = () => {
        context.setUser({
            name : 'Hello World',
            email : 'Test@gmail.com'
        })
    }

    const logout = () => {
        context.setUser(null)
    }

    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <div>User Name : {context.user?.name}</div>
            <div>User Email : {context.user?.email}</div>
        </div>
    )
}