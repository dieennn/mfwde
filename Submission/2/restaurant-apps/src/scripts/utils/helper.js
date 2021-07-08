let cutString = (data, limit) => {
  return data.length > limit ? data.substring(0, limit) : data;
};

export default cutString;
