import { Button } from "./Button"
import { Input } from "./Input"

export const HandleEvent = () => {
    return (
        <div>
            <Input value="" changeEvent={(event) => console.log("change event",event)}/>
            <Button handleClick={(e, id) => console.log("click event",id)}/>
        </div>
    )
}