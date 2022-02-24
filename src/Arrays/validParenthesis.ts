function peek(arr: string[]) {
    if (arr.length < 1) return null;
    return arr[arr.length - 1];
}

const opening = ['(', '{', '['];
const closing = [')', '}', ']'];

function isPeekClosing(stack: string[], char: string): boolean {
    const a = opening.indexOf(peek(stack));
    const b = closing.indexOf(char);
    if (a === -1 || b === -1) return false;
    return a === b;
}

export function isValid(s: string): boolean {
    const stack: string[] = [];
    [...s].forEach(char => {
        if (isPeekClosing(stack, char)) stack.pop();
        else stack.push(char);
    })
    return stack.length === 0;
};