import { Button } from "./Button"

export const HandleEvent = () => {
    return (
        <div>
            <Button handleClick={(e, id) => console.log("click event",id)}/>
        </div>
    )
}