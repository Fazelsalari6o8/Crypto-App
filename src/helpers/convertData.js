const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    const date1 = new Date(item[0]);
    return {
      date: dayOfWeek[date1.getDay()],
      [type]: item[1],
    };
  });

  console.log(convertedData);
  return convertedData;
};

export { convertData };
