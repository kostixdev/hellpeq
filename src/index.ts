/*
 * some helpers/solutions to use
 */

/**
 * Returns random number in range of min and max.
 * @param {number} min - Min value
 * @param {number} max - Max value
 * @returns {number} - random value
 */
const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Returns random Int number in range of min and max.
 * @param {number} min - Min Int value
 * @param {number} max - Max Int value
 * @returns {number} - random Int value
 */
const getRandomIntArbitrary = (min: number, max: number): number => {
  return Math.floor(getRandomArbitrary(min, max));
};

/**
 * Returns random Int number in range of min and max with step.
 * @param {number} min - Min Int value
 * @param {number} max - Max Int value
 * @param {number} step - Step value
 * @returns {number} - random Int value
 */
const getRandomIntArbitraryWithStep = (
  min: number,
  max: number,
  step: number
): number => {
  // const s = Math.floor( ( max - min ) / step ); // count of steps in range
  // const r = getRandomIntArbitrary(0, s); // randon stepper
  // const n = min + ( r * step ); // stepped number
  // return n;
  return min + getRandomIntArbitrary(0, Math.floor((max - min) / step)) * step;
};

/**
 * Returns random boolean value.
 * @returns {boolean} - random true or false
 */
const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

/**
 * Returns random item from array.
 * @template T - type of `array` item
 * @param {T[]} array - array of items
 * @returns {T} - random item from array
 */
const getRandomItemFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Returns array of number values in range with step.
 * @param {number} startAt - first range value
 * @param {number} stopAt - last range value
 * @param {number} step - range step value
 * @returns {number[]} - array of range items
 */
const getRangeArrayByStep = (
  startAt: number,
  stopAt: number,
  step: number
): number[] => {
  const rangeArray = [];
  for (let item = startAt; item <= stopAt; item += step) {
    rangeArray.push(item);
  }
  return rangeArray;
};

export {
  getRandomArbitrary,
  getRandomIntArbitrary,
  getRandomIntArbitraryWithStep,
  getRandomBoolean,
  getRandomItemFromArray,
  getRangeArrayByStep,
};
