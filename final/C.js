/**
 * @param {String} imageSrc - base64 картинки, например ’data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...’
 * @returns {Promise}
 */
function traceImage(imageSrc) {
  return new Promise(resolve => {
    let color, done;

    var image = new Image();
    image.src = imageSrc;

    image.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      let xStart, xEnd, yStart, yEnd;

      for (let x = 0; x < imageData.width; x++) {
        if (done) break;
        for (let y = 0; y < imageData.height; y++) {
          if (done) break;
          let index = (y * imageData.width + x) * 4;
          let red = imageData.data[index];
          let green = imageData.data[index + 1];
          let blue = imageData.data[index + 2];
          if (red !== 255 || green !== 255 || blue !== 255) {
            if (xStart === undefined) xStart = x;
            if (yStart === undefined) yStart = y;

            if (!color) color = `rgb(${red}, ${green}, ${blue})`;

            if (x === imageData.width - 1) xEnd = x;
            else {
              let indexRight = (y * imageData.width + x + 1) * 4;
              let redRight = imageData.data[indexRight];
              let greenRight = imageData.data[indexRight + 1];
              let blueRight = imageData.data[indexRight + 2];

              if (redRight === 255 && greenRight === 255 && blueRight === 255) {
                xEnd = x;
              }
            }

            if (y === imageData.height - 1) yEnd = y;
            else {
              let indexBelow = ((y + 1) * imageData.width + x) * 4;
              let redBelow = imageData.data[indexBelow];
              let greenBelow = imageData.data[indexBelow + 1];
              let blueBelow = imageData.data[indexBelow + 2];

              if (redBelow === 255 && greenBelow === 255 && blueBelow === 255) {
                yEnd = y;
              }
            }
            if (xEnd && yEnd) done = true;
          }
        }
      }

      resolve(`
        <div>  
          <div style="  
            position: absolute;  
            width: ${xEnd - xStart + 1}px;  
            height: ${yEnd - yStart + 1}px;
            top: ${yStart}px;  
            left: ${xStart}px;
            background-color: ${color};">
          </div>  
        </div>
      `);
    };
  });
}
