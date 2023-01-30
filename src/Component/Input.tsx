import React from "react"

type inputProps = {
    value : string,
    changeEvent : (event : React.ChangeEvent) => void
}

export const Input = (props: inputProps) => {
    return (
        <div>
            <input type='text' onChange={(e) => props.changeEvent(e)}/>
        </div>
    )
}