import mysql from 'mysql';

// Create a connection pool
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.NEXT_PUBLIC_HOST,
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  database: process.env.NEXT_PUBLIC_DATABASE,
  port: 3306,
});


export default db;
