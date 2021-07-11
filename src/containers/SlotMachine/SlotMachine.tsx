import React from 'react';

import useSlotMachine from 'hooks/useSlotMachine';
import Wheel from 'components/Wheel';
import Message from 'components/Message';
import Button from 'components/Button';
import styleClasses from './SlotMachine.module.scss';

const SlotMachine: React.FC = () => {
    const { wheels, startSpinningHandler, stopSpinningHandler } = useSlotMachine();

    return (
        <div className={styleClasses['slot-machine']}>
            <header className={styleClasses['slot-machine__header']}>
                <h1 className={styleClasses['slot-machine__title']}>Slot Machine</h1>
            </header>

            <div className={styleClasses['slot-machine__wheels-wrapper']}>
                {wheels.indexes &&
                    wheels.indexes.length &&
                    wheels.indexes.map((randomIndex, currIndex) => <Wheel key={currIndex} randomIndex={randomIndex} />)}
            </div>

            <div className={styleClasses['slot-machine__btns-wrapper']}>
                <Button title='Start Spinning' disabled={wheels.status === 'spinning'} onClick={startSpinningHandler} />
                <Button
                    title='Stop It'
                    disabled={wheels.status !== 'spinning'}
                    severity='none'
                    onClick={stopSpinningHandler}
                />
            </div>

            {wheels.status === 'spun' && (
                <div className={styleClasses['slot-machine__message-wrapper']}>
                    <Message score={wheels.score} />
                </div>
            )}
        </div>
    );
};

export default SlotMachine;
