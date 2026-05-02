// 1. My original solution
// export function indexCappedSums(arr: readonly number[], queries: readonly (readonly [number, number])[]): number[] {
//   return queries.map(([l, r]) => arr.slice(l, r).reduce((sum, entry, idx) => sum + Math.min(entry, idx), 0));
// }

// 2. Kata's author solution
class BIT {
  private tree: number[];

  constructor(size = 1) {
    this.tree = new Array(size + 1).fill(0);
  }

  private expand(): void {
    const n = this.tree.length;
    const p = n - (n & -n);
    let sum = 0;
    for (let i = n - 1; i !== p; i -= i & -i) {
      sum += this.tree[i]!;
    }
    this.tree.push(sum);
  }

  update(index: number, value: number): void {
    if (index < 1) throw new Error("Index of BIT must be positive.");
    while (index >= this.tree.length) this.expand();

    for (; index < this.tree.length; index += index & -index) {
      this.tree[index] += value;
    }
  }

  query(index: number): number {
    if (index >= this.tree.length) index = this.tree.length - 1;
    let sum = 0;
    for (; index > 0; index -= index & -index) {
      sum += this.tree[index]!;
    }
    return sum;
  }

  queryRange(left: number, right: number): number {
    return this.query(right) - this.query(left - 1);
  }
}

export function indexCappedSums(arr: readonly number[], queries: readonly (readonly [number, number])[]): number[] {
  const n = arr.length;
  const out = new Array<number>(queries.length);
  const K = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    K[i] = i - arr[i]!;
  }
  const byK = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const k = K[i]!;
    let list = byK.get(k);
    if (!list) {
      list = [];
      byK.set(k, list);
    }
    list.push(i);
  }

  const queriesAtL: { r: number; qi: number }[][] = Array.from({ length: n + 1 }, () => []);
  for (let qi = 0; qi < queries.length; qi++) {
    const pair = queries[qi]!;
    queriesAtL[pair[0]]!.push({ r: pair[1]!, qi });
  }

  const bitSum = new BIT(n + 2);
  const bitCnt = new BIT(n + 2);

  for (let l = n; l >= 0; l--) {
    for (const i of byK.get(l) ?? []) {
      const idx = i + 1;
      bitSum.update(idx, K[i]!);
      bitCnt.update(idx, 1);
    }
    for (const { r, qi } of queriesAtL[l]!) {
      const len = r - l;
      if (len <= 0) {
        out[qi] = 0;
        continue;
      }
      const sumK = bitSum.queryRange(l + 1, r);
      const cnt = bitCnt.queryRange(l + 1, r);
      out[qi] = (len * (len - 1)) / 2 - sumK + l * cnt;
    }
  }

  return out;
}

const arr = [6, 2, 3, 1, 1, 5];
const queries: Array<[number, number]> = [
  [0, 3],
  [2, 5],
  [4, 4],
  [0, 6],
];

console.log(indexCappedSums(arr, queries)); // [3, 2, 0, 10]
