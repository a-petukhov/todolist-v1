exports.getDate = function (localeString) {
  let dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  return new Date().toLocaleDateString(localeString, dateOptions);
};

exports.getDay = function (localeString) {
  let dateOptions = {
    weekday: 'long',
  };
  return new Date().toLocaleDateString(localeString, dateOptions);
};
