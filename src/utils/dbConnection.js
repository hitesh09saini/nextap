import mysql from 'mysql';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.NEXT_PUBLIC_HOST,
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  database: process.env.NEXT_PUBLIC_DATABASE,
  port: 3306,
});


pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } 
  console.log("connected to db...");
});

export default pool;
