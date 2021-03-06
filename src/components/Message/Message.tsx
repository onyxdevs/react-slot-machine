import React from 'react';

import styleClasses from './Message.module.scss';

type MessageProps = {
    score: 'full' | 'consecutive' | 'inconsecutive' | '';
};

export const loserMessages = [
    'Not quite ð',
    'Stop gambling ð',
    'Hey, you lost! ð',
    'Ouch! I felt that ðĪ­',
    "Don't beat yourself up ð",
    'There goes the college fund ðļ',
    'I have a cat. You have a loss ð',
    "You're awesome at losing ðĪŠ",
    'Coding is hard ðĨķ',
    "Don't hate the coder ð"
];

export const winnerMessages: { [type: string]: string } = {
    full: 'You won $100 ð',
    consecutive: 'You won $20 ðŧ',
    inconsecutive: 'You won $10 ðš'
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
