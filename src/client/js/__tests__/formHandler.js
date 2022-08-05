/**
 * @jest-environment jsdom
 */

import { handleSubmit } from '../formHandler';

describe('handleSubmit', () => {
  test('Should call event preventDefault', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');
    window.alert = () => {};

    handleSubmit(event);
    expect(event.preventDefault).toBeCalled();
  });
});
