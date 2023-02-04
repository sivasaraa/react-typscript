import { count } from "console"
import { useEffect, useRef, useState } from "react"


export const MutableRef = () => {
    const [timer, setTimer] = useState(0)

    const mutref = useRef<number>()

    const stopTimer = () => {
        window.clearInterval(mutref.current)
    }

    useEffect(() => {
        mutref.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        },1000)
        return () => {
            stopTimer()
        }
    },[])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={stopTimer}>Stop TImer</button>
        </div>
    )
}