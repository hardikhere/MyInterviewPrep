import { maxSubArray } from './maxSubArray';

describe('max sub arrays', () => {
  test('case 1', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toStrictEqual(23);
  });

  test('case 2', () => {
    expect(maxSubArray([-1])).toStrictEqual(-1);
  })

  test('case 3', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
  })

  test('case 4', () => {
    expect(maxSubArray([-2, 1])).toStrictEqual(1);
  })

  test('case 5', () => {
    expect(maxSubArray([-2, -1])).toStrictEqual(-1);
  })
});
