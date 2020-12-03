const toCapitalizeFirstLetter = (str: string) => {
  if (!str) return str;

  const newStr = str.toLowerCase();
  return newStr[0].toUpperCase() + newStr.slice(1);
};

export default toCapitalizeFirstLetter;
