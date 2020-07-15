export const apiCall = (link) =>
  fetch(link).then(response => response.json())

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }