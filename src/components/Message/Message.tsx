import React from 'react';

import styleClasses from './Message.module.scss';

type MessageProps = {
    score: 'full' | 'consecutive' | 'inconsecutive' | '';
};

export const loserMessages = [
    'Not quite 😕',
    'Stop gambling 😈',
    'Hey, you lost! 🙃',
    'Ouch! I felt that 🤭',
    "Don't beat yourself up 👊",
    'There goes the college fund 💸',
    'I have a cat. You have a loss 😂',
    "You're awesome at losing 🤪",
    'Coding is hard 🥶',
    "Don't hate the coder 😇"
];

export const winnerMessages: { [type: string]: string } = {
    full: 'You won $100 🎉',
    consecutive: 'You won $20 🍻',
    inconsecutive: 'You won $10 🍺'
};

const Message: React.FC<MessageProps> = ({ score }: MessageProps) => {
    let message;
    if (typeof winnerMessages[score] !== 'undefined') {
        message = winnerMessages[score];
    } else {
        message = loserMessages[Math.floor(Math.random() * loserMessages.length)] + ' ';
    }

    return <p className={styleClasses['message']}>{message}</p>;
};

export default Message;
