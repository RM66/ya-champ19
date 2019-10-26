function solve({ a, replace }) {
  const aStr = String(a);
  const aSplit = aStr.split("");
  const len = aStr.length;
  let min = a;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let temp = parseInt(
        aSplit
          .map((char, index) => {
            if (index > j || index < i) {
              return char;
            }
            return replace(char);
          })
          .join(""),
        10
      );
      if (temp < min) min = temp;
    }
  }

  return min;
}

module.exports = solve;
