module.exports = function(input) {
  const pre = input.split("?");
  const query = pre.length === 2 ? `?${pre[1]}` : "";
  const splited = pre[0].split(/\/|-|_/);
  if (splited.length === 5) {
    return `/${splited[1]}/${splited[2]}/${splited[4]}/${splited[3]}${query}`;
  }
  return `/${splited[1]}/${splited[2]}/${splited[3]}${query}`;
};
