import React from 'react';

import styleClasses from './Button.module.scss';

type ButtonProps = {
    title: string;
    severity?: 'primary' | 'none';
    disabled?: boolean;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, severity, disabled, onClick }: ButtonProps) => {
    if (!(title && onClick)) return null;

    if (!disabled) {
        disabled = false;
    }

    let btnClasses = [styleClasses['button']];
    if (!severity) {
        btnClasses.push(styleClasses['button--primary']);
    } else if (severity === 'none') {
        btnClasses.push(styleClasses['button--none']);
    }

    return (
        <button className={btnClasses.join(' ')} type='button' disabled={disabled} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
