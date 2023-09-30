import React from 'react';
import './IconButton.scss'

type IconButtonProps = {
    icon: JSX.Element;
    onClick?: () => void;
    variant?: 'filled' | 'outlined'
}

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick = () => null,
    variant = 'filled'
}) => {
    return (
        <button onClick={onClick} className={`iconBtn ${variant === 'filled' ? 'btn--filled' : 'btn--outlined'}`}>
            {icon}
        </button>
    )
}

export default IconButton;