export const calculateTimePassed = (current, previous) => {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    const res = Math.round(elapsed / 1000);
    return res == 1 ? "1 second ago" : res + " seconds ago";
  } else if (elapsed < msPerHour) {
    const res = Math.round(elapsed / msPerMinute);
    return res == 1 ? "1 minute ago" : res + " minutes ago";
  } else if (elapsed < msPerDay) {
    const res = Math.round(elapsed / msPerHour);
    return res == 1 ? "1 hour ago" : res + " hours ago";
  } else if (elapsed < msPerMonth) {
    const res = Math.round(elapsed / msPerDay);
    return res == 1 ? "1 day ago" : res + " days ago";
  } else if (elapsed < msPerYear) {
    const res = Math.round(elapsed / msPerMonth);
    return res == 1 ? "1 month ago" : res + " months ago";
  } else {
    const res = Math.round(elapsed / msPerYear);
    return res == 1 ? "1 year ago" : res + " years ago";
  }
};
