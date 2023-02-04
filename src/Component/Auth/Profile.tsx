
export type profileProps = {
    name : string
}

export const Profile = ({name}:profileProps) => {
    return (
        <div>You Loggedin - {name}</div>
    )
}