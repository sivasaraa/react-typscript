import { person } from './Person.types'

export const Person = (props:person) => {
    return (
        <div>
            <h2>{props.name.first} {props.name.last}</h2>
        </div>
    )
}