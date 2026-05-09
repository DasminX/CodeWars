// MY SOLUTION
export function solve(str) {
  const closestOuterBrackets = str.match(/\(.+\)/);
  if (!closestOuterBrackets) return str;

  const lettersBeforeMultiplier = str.match(/^[a-z]+/)?.[0] ?? "";
  const closestBracketsContent = closestOuterBrackets[0].slice(1, -1);
  const repeat = parseInt(str.slice(lettersBeforeMultiplier.length, closestOuterBrackets.index)) || 1;

  return lettersBeforeMultiplier + solve(closestBracketsContent).repeat(repeat);
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// VERY INTERESTING SOLUTION FOUND AFTER SOLVING (WORTH TO BE NOTED)
// function solve(s) {
//   while (s.includes("(")) {
//     s = s.replace(/\d?\((\w*)\)/, (m, a) => a.repeat(+m[0] || 1));
//   }
//   return s;
// }

solve("3(ab)"); // ababab
solve("2(a3(b))"); // abbbabbb
solve("3(b(2(c)))"); // bccbccbcc
solve("k(a3(b(a2(c))))"); // kabaccbaccbacc
