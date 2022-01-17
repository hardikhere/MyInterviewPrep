import { mergeSortedArrays } from './mergeSortedArrays';
import { getSortedRandomArray } from './utils';

test('Merging two empty arrays', () => {
  expect(mergeSortedArrays([], [])).toStrictEqual([]);
});

test('merging two sorted arrays', () => {
  const test1 = mergeSortedArrays([1, 2], [2, 4]);
  console.log(test1);
  expect(test1).toStrictEqual([1, 2, 2, 4]);
});

test('merging two large arrays', () => {
  const arr1 = getSortedRandomArray(10);
  console.log(
    '🚀 ~ file: mergeSortedArrays.test.ts ~ line 17 ~ test ~ arr1',
    arr1,
  );
  const arr2 = getSortedRandomArray(10);
  console.log(
    '🚀 ~ file: mergeSortedArrays.test.ts ~ line 21 ~ test ~ arr2',
    arr2,
  );
  const ans = [...arr1, ...arr2];
  ans.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  console.log(
    '🚀 ~ file: mergeSortedArrays.test.ts ~ line 31 ~ ans.sort ~ ans',
    ans,
  );
  const output = mergeSortedArrays(arr1, arr2);
  console.log(
    '🚀 ~ file: mergeSortedArrays.test.ts ~ line 32 ~ test ~ output',
    output,
  );

  expect(output).toStrictEqual(ans);
});
