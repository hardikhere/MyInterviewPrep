// 5 4 -1 7 8
export function maxSubArray(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }

    return max;
}
