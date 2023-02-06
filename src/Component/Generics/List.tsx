
type listProps = {
    listItems : string[] | number[],
    onclick : (value : string | number) => void 
}

export const List = ({listItems, onclick}:listProps) => {
    return (
        <div>
            {listItems.map((items) => {
                return (<div key={items} onClick={() => onclick(items)}>{items}</div>)
            })}
        </div>
    )
}