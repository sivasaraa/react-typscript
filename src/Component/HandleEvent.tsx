import { Button } from "./Button"
import { Input } from "./Input"

export const HandleEvent = () => {
    return (
        <div>
            <Input />
            <Button handleClick={(e, id) => console.log("click event",id)}/>
        </div>
    )
}