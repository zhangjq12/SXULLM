export const hexToDecimal = (hex) => {
  return parseInt(hex, 16);
};

export const decimalToHex = (decimal) => {
  return decimal.toString(16);
};

export const calculateFrontColorToBackGround = (frontColor) => {
  return `#${decimalToHex(hexToDecimal(frontColor.split("#")[1]) + 555471)}`;
};
