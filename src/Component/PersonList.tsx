type personlist = {
    name:{
        first: string,
        last: string
    }[]
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