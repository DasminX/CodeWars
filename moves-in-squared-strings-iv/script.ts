/* MATRIX*/

type MatrixValue = string | number;
type Matrix = Array<Array<MatrixValue>>;

export const Matrix = {
  toString: (matrix: Matrix): string =>
    matrix
      .map((r) => r.join(""))
      .join("\n")
      .trim(),
  fromString: (str: string): Matrix => str.split("\n").map((p) => p.split("")),
  empty: (): Matrix => [],
};

/* MATRIX TRANSFORMATING FUNCTIONS*/

// input:   [[a,b,c,d],[e,f,g,h],[i,j,k,l],[m,n,o,p]]
// desired: [[d,h,l,p],[c,g,k,o],[b,f,j,n],[a,e,i,m]]
export function rot90Counter(input: string): string {
  const twoDimMatrix = Matrix.fromString(input);
  const rotated90DegMatrix = Matrix.empty();

  for (let i = 0; i < twoDimMatrix.length; i++) {
    for (let j = twoDimMatrix[i].length - 1; j >= 0; j--) {
      const currentIndex = twoDimMatrix[i].length - j;
      if (!Array.isArray(rotated90DegMatrix[currentIndex])) {
        rotated90DegMatrix[currentIndex] = [];
      }
      rotated90DegMatrix[currentIndex].push(twoDimMatrix[i][j]);
    }
  }

  return Matrix.toString(rotated90DegMatrix);
}

// const INPUT = "abcd\nefgh\nijkl\nmnop";
// console.log(rot90Counter(INPUT));

/* */
/* */

// input:   [[a,b,c,d],[e,f,g,h],[i,j,k,l],[m,n,o,p]]
// desired: [[p,l,h,d],[o,k,g,c],[n,j,f,b],[m,i,e,a]]
export function diag2Sym(input: string): string {
  const twoDimMatrix = Matrix.fromString(input);
  const diag2SymMatrix = Matrix.empty();

  for (let i = 0; i < twoDimMatrix.length; i++) {
    for (let j = twoDimMatrix[i].length - 1; j >= 0; j--) {
      const currentIndex = twoDimMatrix[i].length - j;
      if (!Array.isArray(diag2SymMatrix[currentIndex])) {
        diag2SymMatrix[currentIndex] = [];
      }
      diag2SymMatrix[currentIndex].unshift(twoDimMatrix[i][j]);
    }
  }

  return Matrix.toString(diag2SymMatrix);
}

// const INPUT = "abcd\nefgh\nijkl\nmnop";
// console.log(diag2Sym(INPUT));

/* */
/* */

// input:   [[a,b,c,d],[e,f,g,h],[i,j,k,l],[m,n,o,p]]
export function selfieDiag2Counterclock(input: string): string {
  const inputRows = input.split("\n");
  const diag2SymRows = diag2Sym(input).split("\n");
  const rot90CounterRows = rot90Counter(input).split("\n");

  const accumulator: string[] = [];
  for (let i = 0; i < inputRows.length; i++) {
    accumulator.push([inputRows[i], diag2SymRows[i], rot90CounterRows[i]].join("|"));
  }

  return accumulator.join("\n");
}

// const SELFIE_INPUT = "NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg";
// console.log(selfieDiag2Counterclock(SELFIE_INPUT));
// Expected: "NJVGhr|gKilwr|rwliKg\nMObsvw|WLhtvh|hvthLW\ntPhCtl|iRnCsG|GsCnRi\nsoEnhi|lQEhbV|VbhEQl\nrtQRLK|jtoPOJ|JOPotj\nzjliWg|zrstMN|NMtsrz"

/* */
/* */

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}
