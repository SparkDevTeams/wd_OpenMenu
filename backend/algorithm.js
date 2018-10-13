/* eslint-disable */
const axios = require('axios');

let Recipe = {
  name: "Tommy's Breakfast!",
  user: 'Tommy C',
};

let name = Recipe.name;
let user = Recipe.user;

let newName = name.replace(/\W/g, '');
let newUser = user.replace(/\W/g, '');

let date = Date.now();

id = date + newName + newUser;

console.log(id);

