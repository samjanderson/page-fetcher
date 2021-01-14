//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
//say it is fully deprecated?
//do I need to download it?

// node fetcher.js http://www.example.edu/ ./index.html

//1- get command line argument
let args = process.argv.slice(2);

//2-request library to make HTTP request
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

//3-node's fs file to write the module use a callback
fs = require('fs');
fs.writeFile(filename, data, [encoding], [callback]) //* * says to use a callback