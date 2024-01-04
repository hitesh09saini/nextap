import { NextResponse } from "next/server";
import ConnectDB from '@/utils/dbConnection';

export async function GET(req, res) {
    try {
        const db = await ConnectDB();

        const selectAllQuery = 'SELECT * FROM form';

        // Wrap the query in a Promise to use await
        const queryAsync = () => {
            return new Promise((resolve, reject) => {
                db.query(selectAllQuery, (err, results) => {
                    db.end(); // Close the connection after fetching the data

                    if (err) {
                        console.error('Error fetching ' + err.stack);
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        };

        // Use await to wait for the result of the query
        const results = await queryAsync();
          
        console.log(results);

        return NextResponse.json({
            message: "Data fetched successfully",
            results,
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({
            message: `Database connection failed: ${error.message}`,
        }, {
            status: 500  // Internal Server Error
        });
    }
}
