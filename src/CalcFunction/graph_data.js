export const graphData = (data) => {
  const obj = {};
  for (const key of data) {
    if (obj.hasOwnProperty(key.name)) {
      obj[key.name] += 1;
    } else {
      obj[key.name] = 1;
    }
  }
  return obj;
};
