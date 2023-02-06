
type listProps = {
    listItems : string[],
    onclick : (value : string) => void 
}

export const List = ({listItems, onclick}:listProps) => {
    return (
        <div>
            {listItems.map((items) => {
                return (<div id={items} onClick={() => onclick(items)}>{items}</div>)
            })}
        </div>
    )
}