import { zipcodeReducer, initialState } from './zip-codes.reducer';

describe('ZipCodes Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = zipcodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
