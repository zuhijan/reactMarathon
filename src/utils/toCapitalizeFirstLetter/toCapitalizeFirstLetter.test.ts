import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку и возвращать строку с заглавной буквы', () => {
    const result = toCapitalizeFirstLetter('вася');
    expect(result).toBe('Вася');
  });
});
