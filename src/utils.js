export const timeAgo = (dateValue, type) => {
  const date = type === 'string' ? new Date(new Date(dateValue)) : dateValue;
  let seconds = Math.floor((Date.now() - date) / 1000);
  let unit = 'sec';
  let direction = 'ago';
  if (seconds < 0) {
    seconds = -seconds;
    direction = 'just now';
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = 'year';
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = 'day';
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = 'hr';
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = 'min';
  }
  if (value !== 1) {
    unit = unit + 's';
  }
  return value + ' ' + unit + ' ' + direction;
};

export const formatPresentDate = () => {
  let dateObj = new Date();
  const padDateValue = (value) => ('0' + value).slice(-2);
  let formattedDate = `${dateObj.getFullYear()}/${padDateValue(
    dateObj.getMonth() + 1,
  )}/${padDateValue(dateObj.getDate())} ${padDateValue(
    dateObj.getHours(),
  )}:${padDateValue(dateObj.getMinutes())}:${padDateValue(
    dateObj.getSeconds(),
  )}`;
  return formattedDate;
};
