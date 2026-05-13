export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (n <= 97) return 0;
  if (awesomePhrases.indexOf(n) >= 0) return 2;
  if (awesomePhrases.some((num) => num - n <= 2 && num > n)) return 1;

  const ascendingPatternResult = matchesAscendingPattern(n);
  if (ascendingPatternResult) return ascendingPatternResult;

  const descendingPatternResult = matchesDescendingPattern(n);
  if (descendingPatternResult) return descendingPatternResult;

  if (matchesSimplePatterns(n)) return 2;
  if ([1, 2].some((val) => matchesSimplePatterns(n + val))) return 1;

  return 0;
}

function matchesSimplePatterns(n: number) {
  if (n < 100) return false;
  const nass = n.toString();
  if (nass === nass.split("").reverse().join("")) return true; // Palindrome matched
  if (nass.match(/^[0-9]{1}0+$/gi)) return true; // Any digit followed by all zeros
  return false;
}

function matchesAscendingPattern(n: number) {
  if (n < 100) return 0;

  let output = 0;

  for (let i = 0; i <= 2; i++) {
    let innerOutput = 2;
    const split = (n + i).toString().split("");
    for (let j = 1; j < split.length; j++) {
      const calculation = +split[j] - +split[j - 1];
      if (calculation === 1 || (calculation === -9 && j === split.length - 1)) continue;
      innerOutput = 0;
      break;
    }
    if (innerOutput === 2) {
      if (i === 0) {
        output = 2;
        break;
      }
      output = 1;
    }
  }

  return output;
}

function matchesDescendingPattern(n: number) {
  if (n < 100) return 0;

  let output = 0;

  for (let i = 0; i <= 2; i++) {
    let innerOutput = 2;
    const split = (n + i).toString().split("");
    for (let j = 1; j < split.length; j++) {
      const calculation = +split[j] - +split[j - 1];
      if (calculation === -1 || (calculation === 9 && j === split.length - 2)) continue;
      innerOutput = 0;
      break;
    }
    if (innerOutput === 2) {
      if (i === 0) {
        output = 2;
        break;
      }
      output = 1;
    }
  }

  return output;
}

// near ascending sequence
console.log(isInteresting(2342, []) === 0); // 0 DONE
console.log(isInteresting(2343, []) === 1); // 1 DONE
console.log(isInteresting(2344, []) === 1); // 1 DONE
console.log(isInteresting(2345, []) === 2); // 2 DONE
console.log(isInteresting(2346, []) === 0); // 0 DONE

// near ascending sequence (edge case with 9-0)
console.log(isInteresting(7887, []) === 2); // 2 DONE
console.log(isInteresting(7888, []) === 1); // 1 DONE
console.log(isInteresting(7889, []) === 1); // 1 DONE
console.log(isInteresting(7890, []) === 2); // 2 DONE
console.log(isInteresting(7891, []) === 0); // 0 DONE

// near descending sequence
console.log(isInteresting(5429, []) === 0); // 0
console.log(isInteresting(5430, []) === 1); // 1
console.log(isInteresting(5431, []) === 1); // 1
console.log(isInteresting(5432, []) === 2); // 2
console.log(isInteresting(5433, []) === 0); // 0

// near descending sequence (edge case with 0-9)
console.log(isInteresting(3207, []) === 0); // 0
console.log(isInteresting(3208, []) === 1); // 1
console.log(isInteresting(3209, []) === 1); // 1
console.log(isInteresting(3210, []) === 2); // 2
console.log(isInteresting(3211, []) === 0); // 0

// "boring" numbers
console.log(isInteresting(3, [1337, 256]) === 0); // 0 DONE
console.log(isInteresting(3236, [1337, 256]) === 0); // 0 DONE

// nearing a provided "awesome phrase"
console.log(isInteresting(1334, [1337, 256]) === 0); // 0 DONE
console.log(isInteresting(1335, [1337, 256]) === 1); // 1 DONE
console.log(isInteresting(1336, [1337, 256]) === 1); // 1 DONE
console.log(isInteresting(1337, [1337, 256]) === 2); // 2 DONE
console.log(isInteresting(1338, [1337, 256]) === 0); // 0 DONE

// near palindrome
console.log(isInteresting(11207, []) === 0); // 0 DONE
console.log(isInteresting(11208, []) === 0); // 0 DONE
console.log(isInteresting(11209, []) === 1); // 1 DONE
console.log(isInteresting(11210, []) === 1); // 1 DONE
console.log(isInteresting(11211, []) === 2); // 2 DONE
console.log(isInteresting(11212, []) === 0); // 0 DONE

// near digit + all zeros values
console.log(isInteresting(4997, []) === 0); // 0 DONE
console.log(isInteresting(4998, []) === 1); // 1 DONE
console.log(isInteresting(4999, []) === 1); // 1 DONE
console.log(isInteresting(5000, []) === 2); // 2 DONE
console.log(isInteresting(5001, []) === 0); // 0 DONE

// other cases
console.log(isInteresting(651, []) === 0); // 0 DONE
console.log(isInteresting(652, []) === 1); // 1 DONE
console.log(isInteresting(653, []) === 1); // 1 DONE
console.log(isInteresting(654, []) === 2); // 2 DONE
console.log(isInteresting(655, []) === 1); // 1 DONE
console.log(isInteresting(98, []) === 1); // DONE
console.log(isInteresting(109, []) === 1); // 1 DONE
console.log(isInteresting(901, []) === 0); // 0 DONE
