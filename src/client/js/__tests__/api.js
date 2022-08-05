import { postData } from '../api';

test('Should reject error in error case', async () => {
  const mockPostRequest = postData('/test', {});
  await expect(mockPostRequest).rejects.toBeTruthy();
});
