////// Работа с простыми типами

function concat(first: string, second: string): string  {
  return first + second;
}
concat('Hello ', 'World'); // -> Hello World;

///// Работа с интерфейсами

type howIDoItType = string;
type someArrayType = (string | number)[];

interface IMyHomeTask {
  howIDoIt: howIDoItType;
  someArray: someArrayType;
  withData: {
    howIDoIt: howIDoItType;
    someArray: someArrayType;
  }[];
}

const MyHometask: IMyHomeTask = {
  howIDoIt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
};

///// Типизация функций, используя Generic

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (reducer: T, item: T, index: number, arr: MyArray<T>) => U, initialValue?: U): U;
}

const tsArray: MyArray<number> = [1, 2, 3, 22, 4];

export const one = (): void => {
  const one = tsArray.reduce((reducer, item) => {
    return reducer + item;
  });
  console.log(one)
}
