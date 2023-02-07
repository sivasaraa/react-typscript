

type buttonProps = {
    variant : 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const Button = ({variant, children, ...rest} : buttonProps) => {
    return (
        <button className={variant} {...rest}>{children}</button>
    )
}

export default Button