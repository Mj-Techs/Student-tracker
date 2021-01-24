export const dataExtract = (data) => {
  const finalData = [];

  const result = data
    .replace(/From /g, "")
    .replace(/::/g, "")
    .split("\t")
    .join(",")
    .split("\n");

  result.forEach((ele) => {
    if (ele.length !== 0) {
      const key = ele.slice(0, ele.indexOf(","));
      let value = ele.slice(ele.indexOf(",") + 1);
      let property = value.slice(0, value.indexOf(":"));
      let name = property.slice(0, property.indexOf("To")).trim(" ");

      finalData.push({
        time: key,
        name: name,
        message: value.slice(value.indexOf(":") + 1),
      });
    }
  });

  return finalData;
};
