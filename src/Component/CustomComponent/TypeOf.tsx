import React from "react"
import { Greet } from "../Greet"


export const TypeOf = (props : React.ComponentProps<typeof Greet>) => {
    return (
        <div>{props.count} - {props.loggedin} - {props.name}</div>
    )
}