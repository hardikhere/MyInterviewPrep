// time complexity O n^2
export function twoSumNaive(nums: number[], target: number): number[] {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) continue;
            if (nums[i] + nums[j] === target) return [i, j];
        }
    };
    return [-1];
};

export function twoSumBetter(nums: number[], target: number) {
    const hashMap = new Map<number, number>();
    nums.forEach((val, index) => {
        hashMap.set(val, index);
    })

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashMap.has(complement) && hashMap.get(complement) !== i) {
            return [i, hashMap.get(complement)];
        }
    }

    throw new Error('No two sum solution');
}
