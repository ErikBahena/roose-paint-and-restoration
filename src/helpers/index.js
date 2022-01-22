export const formatPhonePlain = (phoneNumber) => {
  return phoneNumber
    .trim()
    .replace("(", "")
    .replace(")", "")
    .replace("-", " ")
    .split(" ")
    .join("-");
};

export const isToday = (dayOfTheWeek, secondCheck) => {
  let options = {
    weekday: "long",
    hour12: true,
  };

  let dt = new Date().toLocaleTimeString("en-us", options);
  if (dt.split(" ")[0] === dayOfTheWeek) return true;
  if (dt.split(" ")[0] === secondCheck) return true;
};
