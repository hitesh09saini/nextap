import mysql  from 'mysql';

const ConnectDB = () => {
  const connection = mysql.createConnection({
    host: `${process.env.NEXT_PUBLIC_HOST}`,
    user: `${process.env.NEXT_PUBLIC_USER}`,
    password: `${process.env.NEXT_PUBLIC_PASSWORD}#`,
    database:`${process.env.NEXT_PUBLIC_DATABASE}`,
  });
  return connection;
};

export default ConnectDB;
