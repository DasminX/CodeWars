export function duplicateEncode(word: string): string {
  let upper = word.toLocaleUpperCase();
  const occurenceMap: Record<string, number> = {};

  for (let i = 0; i < upper.length; i++) {
    occurenceMap[upper[i]] = (occurenceMap[upper[i]] || 0) + 1;
  }

  let result = "";
  for (let j = 0; j < upper.length; j++) {
    result += occurenceMap[upper[j]] > 1 ? ")" : "(";
  }

  return result;
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((
