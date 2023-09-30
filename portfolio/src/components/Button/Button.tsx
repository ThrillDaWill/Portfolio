import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Button.scss';

type ButtonProps = {
    onClick: () => void;
    text: string;
    startIcon?: IconProp;
    variant?: 'filled' | 'outlined',
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    text,
    startIcon = undefined,
    variant = 'filled'
}) => {
    return (
        <button onClick={onClick} className={`btn ${variant === 'filled' ? 'btn--filled' : 'btn--outlined'}`}>
            {startIcon &&
                <FontAwesomeIcon
                    icon={startIcon}
                    size="lg"
                />
            }
            <p className='hdg hdg--2'>{text}</p>
        </button>
    )
}

export default Button;