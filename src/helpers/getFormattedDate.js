const getFormattedDate = (dateString) => {
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
  const date = new Date(dateString);
  const year = date.getFullYear();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const formattedDate = `${day}. ${monthName} ${year}`;
  return formattedDate;
};

export default getFormattedDate;
