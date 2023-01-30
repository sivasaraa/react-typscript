import React from "react"

type buttonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id : number) => void
}

export const Button = (props : buttonProps) => {
    return (
        <div>
            <button onClick={(e) => props.handleClick(e, 1)}>Click Event</button>
        </div>
    )
}