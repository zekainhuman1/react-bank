import { FC } from "react"

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
children?: string
}

const Button: FC<BtnProps> = ({className, children, ...props}) => {
    console.log(className)
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default Button