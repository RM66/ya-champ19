/**
 * @param {Object} api - исходное API
 * @returns {Object}
 */
module.exports = function promisify(api) {
  let result = {};
  Object.assign(result, api);
  _promisify(result);
  return result;
};

function _promisify(obj) {
  let temp = {};
  Object.assign(temp, obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "function") {
      Object.defineProperty(obj, key, {
        get: function() {
          return function(...args) {
            return new Promise((resolve, reject) => {
              temp[key]((err, res) => {
                if (err) reject(err);
                else resolve(res);
              }, ...args);
            });
          };
        }
      });
    } else {
      if (typeof obj[key] === "object") _promisify(obj[key]);
      Object.defineProperty(obj, key, {
        get: function() {
          return temp[key];
        }
      });
    }
  });
}
