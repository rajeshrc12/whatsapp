import moment from "moment-timezone";
export const getTimeInAmPM = (date) => {
  return moment
    .tz(date, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .format("hh:mm a");
};
