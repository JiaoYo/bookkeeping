// 格式化时间
export function formatDate (type, dateVal) {
  let systemDate = dateVal ? new Date(dateVal) : new Date(),
    year = systemDate.getFullYear(),
    month = systemDate.getMonth() + 1,
    date = systemDate.getDate(),
    hours = systemDate.getHours(),
    minutes = systemDate.getMinutes(),
    seconds = systemDate.getDate(),
    milliseconds = systemDate.getMilliseconds();
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (type == 0) {
    return year + '-' + month + '-' + date;
  } else if (type == 1) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds;
  } else if (type == 2) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds + '.' + milliseconds;
  } else if (type == 3) {
    return year + '-' + month;
  } else if (type == 4) {
    return year
  } else if (type == 5) {
    return new Date(year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds).getTime();
  } else if (type == 6) {
    return hours + ":" + minutes + ":" + seconds;
  } else if (type == 7) {
    return hours + ":" + minutes + ":00";
  }
}