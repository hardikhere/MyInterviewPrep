import { mergeSortedArrays } from './mergeSortedArrays';
import { getSortedRandomArray } from './utils';

describe('mergeTwoArrays', () => {
  test('Merging two empty arrays', () => {
    expect(mergeSortedArrays([], [])).toStrictEqual([]);
  });

  test('merging two sorted arrays', () => {
    const test1 = mergeSortedArrays([1, 2], [2, 4]);
    console.log(test1);
    expect(test1).toStrictEqual([1, 2, 2, 4]);
  });

  test('merging two large arrays', () => {
    const arr1 = getSortedRandomArray(1000);

    const arr2 = getSortedRandomArray(1000);

    const ans = [...arr1, ...arr2];
    ans.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    const output = mergeSortedArrays(arr1, arr2);

    expect(output).toStrictEqual(ans);
  });
});
