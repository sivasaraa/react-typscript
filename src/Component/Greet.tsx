
type greetname = {
    name: string,
    count: number,
    loggedin: boolean
}

export const Greet = (props: greetname) => {
    return (
        <div>
            {props.loggedin ? <h2>Hello {props.name} I'm {props.count} years old</h2> : <h2>
                Hello Guest</h2>}
        </div>
    )
}