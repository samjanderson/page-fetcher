//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
//say it is fully deprecated?
//do I need to download it?
//example: > node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html

// node fetcher.js http://www.example.edu/ ./index.html
//2 args 1 us the url and the other is the filepath to download to 
const request = require('request');
const fs = require('fs');

//1- get command line argument
let args = process.argv.slice(2);
let url = args[0]
let file = args[1]
//reqEr and fileEr make these variables

//2-request library to make HTTP request
request(url, (error, response, body) => { //have to include all 3 of the parameters in the request
  console.log(response.statusCode)
  if (response.statusCode < 200 && response.statusCode > 300) {
    return console.log()
  }
  if (error) {
    console.error('error:', error);
  }
  else {
    fs.writeFile(file, body, (error) => {
      if (error) {
        console.error('error:', error);
      }
      else {
        console.log(`Downloaded and saved ${body.length} bytes to ${file}`) //char is a byte, so each char is length 1
      }
    })
  }

  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

//3-node's fs file to write the module use a callback
//args[1] here because that is the file we are writing to

//file = (string) filepath of the file to read
//data = (string or buffer) the data you want to write to the file
//encoding = (optional string) the encoding of the data. Possible encodings are 'ascii', 'utf8', and 'base64'. If no encoding provided, then 'utf8' is assumed.
//callback = (optional function (err) {}) If there is no error, err === null, otherwise err contains the error message.