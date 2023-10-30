/**
 * Calculates the expiration time based on the current time and the given expire time.
 *
 * @param {number} expireTime - The expire time in seconds.
 * @return {number} The expiration time in milliseconds.
 */
export const getExpiresIn = (expireTime = 60) => {
  return new Date().setTime(new Date().getTime() + expireTime * 1000);
};
