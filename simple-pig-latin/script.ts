export const pigIt = (a: string): string => {
  return a.replace(/\w+/gi, (m) => m.slice(1, m.length) + m.at(0) + "ay");
};

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
