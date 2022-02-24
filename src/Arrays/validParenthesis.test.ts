import { isValid } from "./validParenthesis";

describe('Valid Parenthesis', () => {
    test('case 1', () => {
        expect(isValid('()[]')).toStrictEqual(true);
    });

    test('case 2', () => {
        expect(isValid("()}}[]")).toStrictEqual(false);
    })

    test('case 3', () => {
        expect(isValid("({[()]})")).toStrictEqual(true);
    })
});
