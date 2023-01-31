import { Person } from "./Person"
import { PersonList } from "./PersonList"

type greetname = {
    name: string,
    count: number,
    loggedin: boolean
}

export const Greet = ({name, count, loggedin}: greetname) => {
    const person = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const personlist = [
        {
            first: 'James',
            last: 'Latham'
        },
        {
            first: 'Albin',
            last: 'Jose'
        }

    ]

    return (
        <div>
            {loggedin ? <h2>Hello {name} I'm {count} years old</h2> : <h2>
                Hello Guest</h2>}
                <Person name={person}/>
                <PersonList name={personlist}/>
        </div>
    )
}