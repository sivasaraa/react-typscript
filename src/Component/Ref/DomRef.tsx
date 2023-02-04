import { useEffect, useRef } from "react"

export const DomRef = () => {

    const domref = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        domref.current?.focus()
    })
    
    return (
        <div>
            <input type="text" ref={domref}/>
        </div>
    )
}