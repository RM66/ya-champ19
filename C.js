/**
 * Отрисовать баркод для татуировки клона в element
 * @param cloneInfo {CloneInfo} - информация о клоне
 * @param element {HTMLDivElement} - div с фиксированным размером
 *     148x156 пикселей, в который будет отрисовываться баркод
 */
function renderBarcode(cloneInfo, element) {
  const styles = document.createElement("style");
  styles.innerHTML = `
    .bc-wrapper {
      background: #fff;
      border: 3px solid black;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(17, 1fr);
      grid-template-rows: repeat(18, 1fr);
      height: 100%;
      padding: 3px;
      width: 100%;
    }
    .bc-wrapper > b {
      background: #000;
    }
  `;
  const wrapper = document.createElement("div");
  wrapper.className = "bc-wrapper";

  const cells = [cloneInfo.sex === "male" ? 1 : 0];

  const nameAndId = `${cloneInfo.id}${cloneInfo.name.padEnd(26)}`;
  for (let i = 0; i < nameAndId.length; i++) {
    const codes = nameAndId
      .charCodeAt(i)
      .toString(2)
      .padStart(8, 0)
      .split("");
    codes.forEach(code => cells.push(code === "1" ? 1 : 0));
  }

  for (let col = 0; col < 17; col++) {
    let colSum = 0;
    for (let row = 0; row < 17; row++) {
      colSum += cells[col + 17 * row];
    }
    cells.push(colSum % 2);
  }

  const html = cells.reduce((prev, curr) => {
    return prev.concat(curr ? "<b></b>" : "<u></u>");
  }, "");
  wrapper.innerHTML = html;
  element.append(styles, wrapper);
}
