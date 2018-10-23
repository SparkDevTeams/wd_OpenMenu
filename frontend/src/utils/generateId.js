/**
 * Generate a Unique id based on objec name, user name and current time
 *
 * @param {string} name Name of object
 * @param {string} user User name
 */
export const generateId = (name, user) => {
  let newName = name.replace(/\W/g, "");
  let newUser = user.replace(/\W/g, "");

  let date = Date.now();

  let id = date + newName + newUser;

  return id;
};
