
export const URL = "https://convin.onrender.com/";

export const formatDate = (date) => {
    let dt = new Date(date);
    return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
  };
  