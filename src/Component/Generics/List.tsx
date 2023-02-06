
type listProps<T> = {
    listItems : T[],
    onclick : (value : T) => void 
}

export const List = <T extends {}>({listItems, onclick}: listProps<T>) => {
    return (
        <div>
            {listItems.map((item,index) => {
                return (<div key={index} onClick={() => onclick(item)}>{JSON.stringify(item)}</div>)
            })}
        </div>
    )
}