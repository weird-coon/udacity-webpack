import { isValidUrl } from '../validation';

describe('URL Regex', () => {
  test('Should not valid url', () => {
    const mock = isValidUrl('text');
    expect(mock).toEqual(false);
  });

  test('Should be a valid url', () => {
    const mock = isValidUrl('http://test.com');
    expect(mock).toBe(true);
  });
});
