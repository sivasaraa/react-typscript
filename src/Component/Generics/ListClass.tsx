import { List } from "./List"


export const ListClass = () => {
    return (
        <div>
            <List listItems={["Apple","Banana","Orange"]} onclick={(items) => console.log(items)}/>
        </div>
    )
}