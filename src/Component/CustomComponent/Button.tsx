import { ReactNode } from "react"


type buttonProps = {
    variant : 'primary' | 'secondary'
    children : string
} & Omit<React.ComponentProps<'button'>, 'children'>

const Button = ({variant, children, ...rest} : buttonProps) => {
    return (
        <button className={variant} {...rest}>{children}</button>
    )
}

export default Button