import { useCallback, useReducer } from 'react';

import { logger } from 'lib/scripts/utils';

interface ISlotMachineState {
    status: string;
}
interface ISlotMachineAction {
    type: string;
}

const reducer = (state: ISlotMachineState, action: ISlotMachineAction) => {
    switch (action.type) {
        case 'SET_DATA':
            logger.debug('[useSlotMachine]', 'SET_DATA ->', action);

            return {
                ...state
            };

        default:
            return state;
    }
};

const initialState = {
    status: ''
};

const useSlotMachine = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const startSpinningHandler = useCallback((val) => {
        dispatch({
            type: 'START'
        });
    }, []);

    const stopSpinningHandler = useCallback((data) => {
        dispatch({
            type: 'STOP'
        });
    }, []);

    return {
        state,
        startSpinningHandler,
        stopSpinningHandler
    };
};

export default useSlotMachine;
