export const generateStartDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateEndDate = (numberOfDays) => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + numberOfDays);
  return endDate.toISOString().split('T')[0];
};

export const parseDateToDDMMYYYY = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
};