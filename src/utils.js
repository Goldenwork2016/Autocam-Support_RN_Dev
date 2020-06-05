import config from '../appConfig';

// In MilliSeconds
const timeZoneOffset = config.timezone * 60 * 60 * 1000;

export const timeAgo = (dateValue, type) => {
  const dateString = type === 'string' ? new Date(dateValue) : dateValue;
  const date = new Date(dateString);
  const now = new Date();
  let seconds = Math.floor(
    (now.getTime() - date.getTime() - timeZoneOffset) / 1000,
  );
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
  let formattedDate = `${dateObj.getUTCFullYear()}/${padDateValue(
    dateObj.getUTCMonth() + 1,
  )}/${padDateValue(dateObj.getUTCDate())} ${padDateValue(
    dateObj.getUTCHours(),
  )}:${padDateValue(dateObj.getUTCMinutes())}:${padDateValue(
    dateObj.getUTCSeconds(),
  )}`;
  return formattedDate;
};

export const convertByTimeZone = (timeString) => {
  let date = new Date(timeString);
  const dateObj = new Date(date.getTime() + timeZoneOffset);
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
