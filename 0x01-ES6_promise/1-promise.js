function getFullResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (True) {
      resolve('Success');
    }
    else {
      reject("The fake API is not working currently");
    }
});
}

export default getFullResponseFromAPI;
