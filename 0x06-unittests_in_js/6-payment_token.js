const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(); 
    }
  });
}

module.exports = getPaymentTokenFromAPI;
