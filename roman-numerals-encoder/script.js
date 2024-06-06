const hashmap = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
];

function solution(number, accumulated = "") {
  if (number == 0) {
    return accumulated;
  }

  for (const entry of [...hashmap].reverse()) {
    if (number < entry[0]) continue;
    return solution(number - entry[0], accumulated + entry[1]);
  }
}
