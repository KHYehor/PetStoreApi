'use strict';

const checkUser = ({
  username,
  firstName,
  lastName,
  email,
  password,
  phone,
  userStatus,
}) => {
  const isUsername = typeof username === 'string';
  const isFirstName = typeof firstName === 'string';
  const isLastName = typeof lastName === 'string';
  const isEmail = typeof email === 'string';
  const isPassword = typeof password === 'string';
  const isPhone = typeof phone === 'string';
  const isUserStatus = !isNaN(userStatus);
  if (
    isUsername &&
    isFirstName &&
    isLastName &&
    isEmail &&
    isPassword &&
    isPhone &&
    isUserStatus
  )
    return true;
  return false;
};

const checkUsers = arr => {
  if (!Array.isArray(arr)) return checkUser(arr);
  for (let i = 0; i < arr.length; i++) {
    if (!checkUser(arr[i])) return false;
  }
  return true;
};

const checkUserName = username => typeof username === 'string';

module.exports = { checkUsers, checkUserName };
