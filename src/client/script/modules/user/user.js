import users from './user.data';
module.exports = () => users[Math.floor(Math.random() * users.length)];