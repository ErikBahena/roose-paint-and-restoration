export const formatPhonePlain = (phoneNumber) => {
  return phoneNumber
    .trim()
    .replace("(", "")
    .replace(")", "")
    .replace("-", " ")
    .split(" ")
    .join("-");
};
