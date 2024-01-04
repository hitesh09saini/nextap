import { NextResponse } from "next/server";
// import pool from '@/utils/dbConnection';
import mysql from 'mysql';

export async function POST(req, res) {
    try {

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

        const body = await req.json();

        console.log(body.name, body.email);

        if (!body.name || !body.email) {
            return NextResponse.json({
                message: "Name and email are required fields.",
            }, {
                status: 400
            });
        }

        // // Creating the 'form' table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS form (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL
            )`;

        // // Wrap the create table query in a Promise to use await
        await new Promise((resolve, reject) => {
            pool.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table: ' + err.stack);
                    reject(err);
                } else {
                    console.log('Table created or already exists');
                    resolve();
                }
            });
        });

        // // Inserting data into the 'form' table
        const insertDataQuery = 'INSERT INTO form (name, email) VALUES (?, ?)';

        // // Wrap the insert data query in a Promise to use await
        const result = await new Promise((resolve, reject) => {
            pool.query(insertDataQuery, [body.name, body.email], (err, results) => {
                if (err) {
                    console.error('Error inserting data: ' + err.stack);
                    reject(err);
                } else {
                    console.log('Data inserted successfully');
                    resolve(results);
                }
            });
        });

        return NextResponse.json({
            message: "Data inserted successfully",
            data: result
        }, {
            status: 200
        });

    } catch (error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({
            message: `${error}`,
        }, {
            status: 400
        });
    }
}
