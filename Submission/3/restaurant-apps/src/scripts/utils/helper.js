const cutString = (data, limit) => {
  if (typeof data !== 'undefined') {
    return data.length > limit ? data.substring(0, limit) : data;
  }
};

/**
 * * Greeting
 */
const greet = () => {
  let display = '';
  const todaydate = new Date();
  const timeis = todaydate.getTime();
  todaydate.setTime(timeis);
  const houris = todaydate.getHours();
  if (houris < 9) display = 'Morning';
  else if (houris < 14) display = 'Afternoon';
  else if (houris < 18) display = 'Afternoon';
  else display = 'Night';
  return display;
};

export { cutString, greet };
