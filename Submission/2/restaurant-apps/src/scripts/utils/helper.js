let cutString = (data, limit) => {
  return data.length > limit ? data.substring(0, limit) : data;
};

/**
 * * Greeting
 */
let greet = () => {
  let display = '';
  let todaydate = new Date();
  let timeis = todaydate.getTime();
  todaydate.setTime(timeis);
  let houris = todaydate.getHours();
  if (houris < 9) display = 'Morning';
  else if (houris < 14) display = 'Afternoon';
  else if (houris < 18) display = 'Afternoon';
  else display = 'Night';
  return display;
};

export { cutString, greet };
