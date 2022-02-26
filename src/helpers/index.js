export const formatPhonePlain = (phoneNumber) => {
  return phoneNumber
    .trim()
    .replace("(", "")
    .replace(")", "")
    .replace("-", " ")
    .split(" ")
    .join("-");
};

export const isToday = (date, dayOfTheWeek, secondCheck) => {
  // let options = {
  //   weekday: "long",
  //   hour12: true,
  // };

  // let dt = new Date().toLocaleTimeString("en-us", options);
  // if (dt.split(" ")[0] === dayOfTheWeek) return true;
  // if (dt.split(" ")[0] === secondCheck) return true;
  console.log(date);

  return false;
};

export const alphanumericFilter = (str) => {
  return str?.replace(/[^A-Za-z0-9]/g, "");
};
