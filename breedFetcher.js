const request = require('request');

// take in query from CM
const breed = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv.slice(2);

console.log(breed);



request(breed, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log('description:', data[0].description); // Print the description
  } else {
    console.log('Breed not found');
  }
});