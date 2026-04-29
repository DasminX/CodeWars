export function countSmileys(arr: string[]): number {
  return arr.filter((el) => el.match(/^[:;]{1}[-~]{0,1}[)D]{1}$/i)).length;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
