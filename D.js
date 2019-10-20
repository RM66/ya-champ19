function solution(input) {
  const html = input.replace(/\s\s+|\n/g, " ");
  const splitted = html.split(/<|>/);
  const tags = ["ul", "ol", "li"];
  const currTags = [];
  let olDepth = 0;
  const currLvls = [];
  let currContent = "";
  let indents = [];
  let result = "";

  splitted.forEach(el => {
    const str = el.trim();
    if (!str) return;

    if (tags.includes(str)) {
      currTags.push(str);
      switch (str) {
        case "ul":
          indents.push(2);
          break;
        case "ol":
          olDepth++;
          indents.push(olDepth * 2 + 1);
          break;
        case "li":
          if (!olDepth) break;
          if (!currLvls.length) currLvls.push(1);
          else if (olDepth === currLvls.length) {
            const lastLvl = currLvls.pop();
            currLvls.push(lastLvl + 1);
          } else {
            currLvls.push(1);
          }
      }
    } else if (str[0] === "/") {
      if (str === "/li") {
        let pre = new Array(
          indents.slice(0, -1).reduce((prev, curr) => prev + curr, 0)
        )
          .fill(" ")
          .join("");
        if (olDepth) pre += `${currLvls.join(".")}.`;
        else pre += "-";
        result += `${pre} ${currContent}\n`;
        currContent = "";
      } else indents.pop();
      currTags.pop();
      if (str === "/ol") {
        olDepth--;
        currLvls.pop();
      }
    } else {
      currContent = str;
    }
  });

  return result;
}

module.exports = solution;
