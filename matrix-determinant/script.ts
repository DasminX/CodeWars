type Matrix = Array<Array<number>>;

export function determinant(m: Matrix): number {
  if (!m.length) return 0;
  if (m.length === 1) return m[0][0];
  if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  let sum = 0;
  for (let i = 0; i < m[0].length; i++) {
    const subResult = m[0][i] * determinant(extractMinorMatrix(m, i));
    sum += i % 2 ? -subResult : subResult;
  }

  return sum;
}

function extractMinorMatrix(m: Matrix, startingIndex: number): Matrix {
  return m.slice(1).map((a) => a.filter((_, i) => i !== startingIndex));
}

// CHECKS
// CHECKS
// CHECKS

const matrixExample = [
  [2, 0, -1],
  [3, 1, 4],
  [0, 5, 2],
];
console.log(determinant(matrixExample)); // -51

const matrixExample2 = [
  [2, 4],
  [11, 3],
];
console.log(determinant(matrixExample2)); // -38

const matrixExample3 = [
  [2, 0, -1, 11, 26, 20],
  [3, 1, 4, 15, 0, 9],
  [0, 5, 2, -3, -8, 42],
  [10, 11, 4, -1, -2, 11],
  [20, -5, 6, -2, 7, -35],
  [30, 15, -9, 4, 13, 12],
];
console.log(determinant(matrixExample3)); // 76546073

const matrixExample4: Array<number[]> = [];
console.log(determinant(matrixExample4)); // 0

const matrixExample5 = [[69]];
console.log(determinant(matrixExample5)); // 69
