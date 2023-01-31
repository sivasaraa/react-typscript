import { name } from "./Person.types"

type personlist = {
    name: name[]
}


export const PersonList = (props: personlist) => {
    return (
        <div>
            {
                props.name.map(person => <h2 key={person.first}>{person.first} {person.last}</h2>)
            }
        </div>
    )
}