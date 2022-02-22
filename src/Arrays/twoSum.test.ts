import { twoSumBetter } from './twoSum';

describe('Two sum problem', () => {
    test('case 1', () => {
        expect(twoSumBetter([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });

    test('case 2', () => {
        expect(twoSumBetter([3, 3], 6)).toStrictEqual([0, 1]);
    })

    test('case 3', () => {
        expect(twoSumBetter([3, 2, 4], 6)).toStrictEqual([1, 2]);
    })
});
