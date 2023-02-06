import { List } from "./List"


export const ListClass = () => {

    const items = [
        {
            name: 'Ajay',
            age : 17
        },
        {
            name : 'Vinay',
            age : 26
        }
    ]

    return (
        <div>
            <List listItems={["Apple","Banana","Orange"]} onclick={(i) => console.log(i)}/>
            <List listItems={[1,2,3]} onclick={(i) => console.log(i)}/>
            <List listItems={items} onclick={(i) => console.log(i)}/>
        </div>
    )
}