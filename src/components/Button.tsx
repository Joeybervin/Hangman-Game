import { FC, ReactNode, MouseEvent } from "react";

interface ButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}


const Button: FC<ButtonProps> = ({onClick, children}) => {


    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button;