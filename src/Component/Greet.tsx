import { Person } from "./Person"

type greetname = {
    name: string,
    count: number,
    loggedin: boolean
}

export const Greet = (props: greetname) => {
    const person = {
        first: 'Bruce',
        last: 'Wayne'
    }

    return (
        <div>
            {props.loggedin ? <h2>Hello {props.name} I'm {props.count} years old</h2> : <h2>
                Hello Guest</h2>}
                <Person name={person}/>
        </div>
    )
}