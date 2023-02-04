import React, { useState } from "react"

type propstype = {
    children : React.ReactNode
}

type authProps = {
    name : string,
    email : string
}

type contextProps = {
    user : authProps | null,
    setUser : React.Dispatch<React.SetStateAction<authProps | null>>
}

export const uContext = React.createContext({} as contextProps)

export const UserContext = (props : propstype) => {
    const [user, setUser] = useState<authProps | null>(null)
    return (
        <uContext.Provider value={{user, setUser}}>
            {props.children}
        </uContext.Provider>
    )
}