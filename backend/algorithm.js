'use strict';
let menu = {
  name: "Tommy's Breakfast!",
  user: 'Tommy C',
};

let name = menu.name;
let user = menu.user;

let newName = name.replace(/\W/g, '');
let newUser = user.replace(/\W/g, '');

let date = Date.now();

let id = date + newName + newUser;

console.log(id);

