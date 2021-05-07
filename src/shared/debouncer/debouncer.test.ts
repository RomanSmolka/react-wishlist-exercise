import { renderHook } from '@testing-library/react-hooks'
import debounce from './debouncer'

describe('Testing debouncing helper', () => {
    it('should return updated value when called once', () => {
        const { result } = renderHook(() => debounce(1, 500));
        expect(result.current).toBe(1);
    });
    it('should not return updated value when called too quickly', () => {
        let value = 1;
        const { result, rerender } = renderHook(() => debounce(value, 500));

        value = 2;
        rerender();
        expect(result.current).toBe(1);
    });
});
