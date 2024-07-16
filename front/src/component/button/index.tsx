import { FC } from "react"
import { useNavigate } from "react-router-dom";
import "./index.css"

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
children?: string;
disabled?: boolean;
redirectTo?: string;
}

const Button: FC<BtnProps> = ({redirectTo, children, disabled, ...props}) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
          props.onClick(event);
        }
        if (redirectTo) {
          navigate(redirectTo);
        }
      }

    return (
        <button
        className={`button ${props.className}`}
        disabled={disabled}
        {...props}
        onClick={handleClick}
      >
            {children}
        </button>
    )
}

export default Button