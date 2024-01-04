import mysql from 'mysql';

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust the limit based on your requirements
  host: process.env.NEXT_PUBLIC_HOST,
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  database: process.env.NEXT_PUBLIC_DATABASE,
  port: 3306,
});

// Function to get a connection from the pool
const getConnectionFromPool = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

export default getConnectionFromPool;
