const getFormattedDate = (string) => {
  const months = [
    'led',
    'úno',
    'bře',
    'dub',
    'kvě',
    'čvn',
    'čvc',
    'srp',
    'zář',
    'říj',
    'lis',
    'pro',
  ];
  const date = new Date(string);
  const year = date.getFullYear();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const formattedDate = `${day}. ${monthName} ${year}`;
  return formattedDate;
};

export default getFormattedDate;
