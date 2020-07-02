const request = require('request');

// take in query from CM

const fetchBreedDescription = function(breedName, callback) {
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response) => {
    if (error) {
      callback(error);
      return; // Print the error if one occurred
    }
    
    const data = JSON.parse(response.body);
   
    if (data.length > 0) {
      callback(null, data[0].description); // Print the description
    } else {
      callback(null, 'Breed not found');
    }
  });
};


module.exports = { fetchBreedDescription };