const ONE_STEP_DEGREES = 6;
const ONE_STEP_FACTOR = (1 / Framework.SPEED) * ONE_STEP_DEGREES;

class MyClock extends Framework.Clock {
  active = false;
  firstShift = true;
  memo = [];
  shifting = false;

  constructor() {
    super();

    this.arrows.push(
      new Framework.Arrow("seconds", {
        color: "red"
      })
    );

    this.arrows.push(
      new Framework.Arrow("minutes", {
        weight: 3,
        length: 80
      })
    );

    this.buttons.push(
      new Framework.Button("Старт/стоп", () => {
        this.active = !this.active;
        if (this.active) {
          this.memo = [];
          this.firstShift = true;
        }
      })
    );

    this.buttons.push(
      new Framework.Button("Запомнить/переключить", () => {
        const [arrowS, arrowM] = this.arrows;
        if (this.active) {
          this.memo.push([arrowS.pos, arrowM.pos]);
        } else {
          this.shifting = true;
          if (this.firstShift) {
            this.firstShift = false;
            const [arrSShift, arrMShift] = this.calcShift([0, 0]);
            arrowS.rotateFactor = arrSShift * ONE_STEP_FACTOR;
            arrowM.rotateFactor = arrMShift * ONE_STEP_FACTOR;
            this.tick = 0;
          } else if (this.memo.length) {
            const [arrSShift, arrMShift] = this.calcShift(this.memo.shift());
            arrowS.rotateFactor = arrSShift * ONE_STEP_FACTOR;
            arrowM.rotateFactor = arrMShift * ONE_STEP_FACTOR;
            this.tick += arrSShift * 10 + arrMShift * 600;
          }
        }
      })
    );

    this.tick = 0;
  }

  calcShift([targetPosS, targetPosM]) {
    let deltaS, deltaM;
    const [arrowS, arrowM] = this.arrows;
    deltaS = Math.abs(targetPosS - arrowS.pos);
    deltaM = Math.abs(targetPosM - arrowM.pos);
    deltaS = deltaS > 180 ? deltaS - 360 : deltaS;
    deltaM = deltaM > 180 ? deltaM - 360 : deltaM;
    if (targetPosS < arrowS.pos) deltaS *= -1;
    if (targetPosM < arrowM.pos) deltaM *= -1;

    return [deltaS / ONE_STEP_DEGREES, deltaM / ONE_STEP_DEGREES];
  }

  onBeforeTick() {
    const [arrowS, arrowM] = this.arrows;

    if (this.shifting) {
      this.shifting = false;
    } else if (this.active) {
      this.tick++;
      arrowS.rotateFactor = this.tick % 10 ? 0 : ONE_STEP_FACTOR;
      arrowM.rotateFactor = this.tick % 600 ? 0 : ONE_STEP_FACTOR;
    } else {
      arrowS.rotateFactor = 0;
      arrowM.rotateFactor = 0;
    }
  }
}
