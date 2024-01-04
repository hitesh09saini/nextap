import { NextResponse } from "next/server";
import db from '@/utils/dbConnection';

export async function POST(req, res) {
    try {
        const body = await req.json();

        console.log(body.name, body.email);

        if (!body.name || !body.email) {
            return NextResponse.json({
                message: "Name and email are required fields.",
            }, {
                status: 400
            });
        }

        // Inserting data into the 'form' table
        const insertDataQuery = 'INSERT INTO form (`name`, `email`) VALUES (?, ?)';

        // Wrap the insert data query in a Promise to use await
        const result = await new Promise((resolve, reject) => {
           db.query(insertDataQuery, [body.name, body.email], (err, results) => {
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
