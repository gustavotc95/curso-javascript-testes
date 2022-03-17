const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your parameters');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );

// Também pode ser assim
// module.exports = {
//   queryString(obj) {
//     return Object.entries(obj).map(keyValueToString).join('&');
//   },

//   parse(string) {
//     return string;
//   },
// };

// Antes de refatorar
// module.exports.queryString = obj => {
//   const entries = Object.entries(obj).map(item => {
//     return `${item[0]}=${item[1]}`;
//   });

//   return entries.join('&');
// };

// Depois de refatorar
// module.exports.queryString = obj => {
//   const entries = Object.entries(obj).map(item => {
//     return `${item[0]}=${item[1]}`;
//   });

//   return entries.join('&');
// };
