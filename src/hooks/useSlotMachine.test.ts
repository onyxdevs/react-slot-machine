import { renderHook, act } from '@testing-library/react-hooks';

import useSlotMachine, { getScore } from './useSlotMachine';

describe('Testing getScore function', () => {
    it('should return empty string when called with [1, 2, 3]', () => {
        const arr = [1, 2, 3];
        expect(getScore(arr)).toEqual('');
    });

    it('should return "full" when called with [1, 1, 1]', () => {
        const arr = [1, 1, 1];
        expect(getScore(arr)).toEqual('full');
    });

    it('should return "consecutive" when called with [1, 1, 2]', () => {
        const arr = [1, 1, 2];
        expect(getScore(arr)).toEqual('consecutive');
    });

    it('should return "inconsecutive" when called with [1, 2, 1]', () => {
        const arr = [1, 2, 1];
        expect(getScore(arr)).toEqual('inconsecutive');
    });
});

describe('Testing useSlotMachine', () => {
    it('wheels status and score should be empty', () => {
        const { result } = renderHook(() => useSlotMachine());
        expect(result.current.wheels.status).toEqual('');
        expect(result.current.wheels.score).toEqual('');
    });

    it('should start spinning after 5 seconds', () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useSlotMachine());
        act(() => {
            jest.advanceTimersByTime(5500);
        });
        expect(result.current.wheels.status).toEqual('spinning');
        expect(result.current.wheels.score).toEqual('');
        jest.useRealTimers();
    });

    it('should start spinning', () => {
        const { result } = renderHook(() => useSlotMachine());
        act(() => {
            result.current.startSpinningHandler();
        });
        expect(result.current.wheels.status).toEqual('spinning');
        expect(result.current.wheels.score).toEqual('');
    });

    it('should stop spinning', () => {
        const { result } = renderHook(() => useSlotMachine());
        act(() => {
            result.current.stopSpinningHandler();
        });
        expect(result.current.wheels.status).toEqual('spun');
    });
});
