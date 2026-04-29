export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 && !a2) return true;
  if ((a1 && !a2) || (!a1 && a2)) return false;
  if (a1!.length !== a2!.length) return false;

  const resultObject: Record<number, number> = {};

  [...a1!.map((e) => Math.pow(e, 2)), ...a2!].forEach((e) => {
    resultObject[e] = (resultObject[e] || 0) + 1;
  });

  return !Object.values(resultObject).some((v) => v % 2 !== 0); // "some" used for fail-fast instead of "every" ;)
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b)); // true

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b)); // false

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

console.log(comp(a, b)); // false
