export const timeAgo = (dateValue, type) => {
  const date = type === 'string' ? new Date(new Date(dateValue)) : dateValue;

  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
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
