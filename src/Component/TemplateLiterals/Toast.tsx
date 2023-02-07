

type horizontal = 'left' | 'center' | 'right'
type vertical = 'top' | 'center' | 'botton'

type positionProps = {
    position : Exclude<`${horizontal} - ${vertical}`,'center - center'> | 'center'
}

export const Toast = ({position} : positionProps) => {
    return (
        <div>Notification appears - {position}</div>
    )
}