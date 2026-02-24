/**
 * Throttle function - обмежує частоту викликів функції
 * @param {Function} func - функція для обмеження
 * @param {number} delay - затримка в мілісекундах
 * @returns {Function} - обгортка функції з throttle
 */
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export default throttle;
