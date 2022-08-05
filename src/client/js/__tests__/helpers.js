import { POLARITY } from '../helpers';

describe('Polarity Helper', () => {
  test('Should return strong negative when text is N+', () => {
    const mock = POLARITY['N+'];
    expect(mock).toBe('Strong negative');
  });
});
