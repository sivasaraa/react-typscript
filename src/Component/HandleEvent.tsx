import { Button } from "./Button"

export const HandleEvent = () => {
    return (
        <div>
            <Button handleClick={() => console.log("click event")}/>
        </div>
    )
}