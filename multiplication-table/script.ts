export function multiplicationTable(size: number): number[][] {
  const accumulator: number[][] = [];
  for (let i = 1; i <= size; i++) {
    let tmp: number[] = [];
    for (let j = 1; j <= size; j++) {
      tmp.push(i * j);
    }
    accumulator.push(tmp);
  }
  return accumulator;
}
