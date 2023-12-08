const truncate = (str, maxLength = 16) => {
  if (str.length < maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
};

export { truncate };
