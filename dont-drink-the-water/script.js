const DENSITY = { H: 1.36, W: 1, A: 0.87, O: 0.8 };

function separateLiquids(glass) {
  return glass
    .flat()
    .sort((a, b) => DENSITY[a] - DENSITY[b])
    .join("")
    .match(new RegExp(`.{${glass[0].length}}`, "gi"))
    .map((m) => m.split(""));
}

console.log(
  separateLiquids([
    ["H", "H", "W", "O"],
    ["W", "W", "O", "W"],
    ["H", "H", "O", "O"],
  ]),
);

console.log(separateLiquids([["A", "H", "W", "O"]]));

console.log(separateLiquids([["A"], ["H"], ["W"], ["O"]]));
