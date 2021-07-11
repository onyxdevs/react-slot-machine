import { useState, useCallback, useRef, useEffect } from 'react';

import { logger } from 'lib/scripts/utils';

const getRandom = () => Math.floor(Math.random() * 4);
const getRandoms = () => [getRandom(), getRandom(), getRandom()];

type scoreType = 'full' | 'consecutive' | 'inconsecutive' | '';

export const getScore = (valuesArr: number[]): scoreType => {
    const map = new Map();
    const valuesLen = valuesArr.length;

    for (let i = 0; i < valuesLen; i += 1) {
        map.set(valuesArr[i], i);
    }

    // no match
    if (map.size === valuesLen) return '';

    // full match
    if (map.size === 1) return 'full';

    // non-consecutive
    // consecutive
    for (let i = 0; i < valuesLen; i += 1) {
        const val = valuesArr[i];

        if (map.has(val) && map.get(val) === i) continue;

        if (map.has(val) && map.get(val) === i + 1) {
            return 'consecutive';
        } else {
            return 'inconsecutive';
        }
    }

    return '';
};

const useSlotMachine = () => {
    const [indexes, setIndexes] = useState<number[]>(getRandoms());
    const [status, setStatus] = useState<string>('');
    const [score, setScore] = useState<scoreType>('');

    const timerRef = useRef<NodeJS.Timeout>();
    const intervalRef = useRef<NodeJS.Timeout>();

    const stopSpinningHandler = useCallback(() => {
        logger.debug('[useSlotMachine]', 'stopSpinningHandler');
        logger.debug('👩 score is:', getScore(indexes) || 'no match');

        setIndexes(indexes);
        setStatus('spun');
        setScore(getScore(indexes));

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, [indexes]);

    const startSpinningHandler = useCallback(() => {
        logger.debug('[useSlotMachine]', 'startSpinningHandler');

        setScore('');
        setStatus('spinning');

        // clear auto start timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        intervalRef.current = setInterval(() => {
            setIndexes(getRandoms());
        }, 50);

        timerRef.current = setTimeout(() => {
            stopSpinningHandler();
        }, 10000);
    }, [setIndexes, stopSpinningHandler, setStatus]);

    const autoStartHandler = useCallback(() => {
        logger.debug('[useSlotMachine]', 'autoStartHandler');

        timerRef.current = setTimeout(() => {
            startSpinningHandler();
        }, 5000);
    }, [startSpinningHandler]);

    useEffect(() => {
        if (status === '') {
            autoStartHandler();
        }
    }, [status, autoStartHandler]);

    return {
        wheels: { indexes, status, score },
        startSpinningHandler,
        stopSpinningHandler
    };
};

export default useSlotMachine;
