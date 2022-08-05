const baseAppUrl = 'http://localhost:8000';

/**
 * Post data to /api endpoint then recive response result
 * @param {String} url
 * @param {Object} data
 * @returns
 */
export const postData = async (url, data) => {
  try {
    const res = await fetch(baseAppUrl + url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error) {
    return Promise.reject(new Error('Error', error));
  }
};
