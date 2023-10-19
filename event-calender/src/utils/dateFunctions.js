export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const nextMonth = (date, setCurrentDate) => {
  setCurrentDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
};

export const prevMonth = (date, setCurrentDate) => {
  setCurrentDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
};

export const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};
