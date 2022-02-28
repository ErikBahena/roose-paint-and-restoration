export const formatPhonePlain = (phoneNumber) => {
  return phoneNumber
    .trim()
    .replace("(", "")
    .replace(")", "")
    .replace("-", " ")
    .split(" ")
    .join("-");
};

export const alphanumericFilter = (str) => {
  return str?.replace(/[^A-Za-z0-9]/g, "");
};
