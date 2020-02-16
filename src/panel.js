const fetch = require("node-fetch");

let status = function(response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response);
};
let json = function(response) {
  return response.json()
};
let infof;
let slideData = fetch('http://www.mocky.io/v2/5e44236931000080ff3b0548')
  .then(status)
  .then(json)
  .then(function(data) {
    infof = data;
  })
  .catch(function (error) {
    console.log('error', error);
  });

