const mysql = require('mysql');

const ConnectDB = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ssss9694#',
    database: 'collegeid'
  });

  return connection;
};

module.exports = ConnectDB;
