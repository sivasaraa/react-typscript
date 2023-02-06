type valueProps = {
    value : number
}

type positiveProps = valueProps & {
    isPositive : boolean,
    isNegative ?: never,
    isZero ?: never
}

type negativeProps = valueProps & {
    isNegative : boolean,
    isPositive ?: never,
    isZero ?: never
}

type zeroProps = valueProps & {
    isZero : boolean,
    isPositive ?: never,
    isNegative ?: never
}


type randomprops = positiveProps | negativeProps | zeroProps

export const RandomNumber = ({value,isPositive,isNegative,isZero} : randomprops) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )
}