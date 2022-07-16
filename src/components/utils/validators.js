export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max Length is ${maxLength}`;
  }
  return undefined;
};
export const required = (value) => {
  if (value) {
    return undefined;
  }
  return `Field is required `;
};
