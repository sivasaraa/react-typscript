
type greetname = {
    name: string
}

export const Greet = (props: greetname) => {
    return (
        <div>
            <h2>Hello {props.name}</h2>
        </div>
    )
}