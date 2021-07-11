import React from 'react';

import styleClasses from './Wheel.module.scss';
import Strawberry from 'containers/SlotMachine/media/strawberry.svg';
import Orange from 'containers/SlotMachine/media/orange.svg';
import Banana from 'containers/SlotMachine/media/banana.svg';
import Monkey from 'containers/SlotMachine/media/monkey.svg';

type WheelProps = {
    randomIndex: number;
};

const Wheel: React.FC<WheelProps> = ({ randomIndex }: WheelProps) => (
    <div className={styleClasses['wheel']}>
        <img src={Strawberry} className={randomIndex === 0 ? styleClasses['active'] : ''} alt='Strawberry' />
        <img src={Orange} className={randomIndex === 1 ? styleClasses['active'] : ''} alt='Orange' />
        <img src={Banana} className={randomIndex === 2 ? styleClasses['active'] : ''} alt='Banana' />
        <img src={Monkey} className={randomIndex === 3 ? styleClasses['active'] : ''} alt='Monkey' />
    </div>
);

export default Wheel;
