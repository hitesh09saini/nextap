import { NextResponse } from "next/server";
import pool from '@/utils/dbConnection';

export async function GET(req, res) {
    try {
        const selectAllQuery = 'SELECT * FROM form';

        // Wrap the query in a Promise to use await
        const queryAsync = () => {
            return new Promise((resolve, reject) => {
                try {
                    pool.query(selectAllQuery, (err, results) => {
                        if (err) {
                            console.error('Error fetching ' + err.stack);
                            reject(err);
                        } else {
                            resolve(results);
                        }
                    });
                } catch (err) {
                    reject(err);
                }
            });
        };

        // Use await to wait for the result of the query
        const results = await queryAsync();

        return NextResponse.json({
            message: "Data fetched successfully",
            results,
        }, {
            status: 200
        });

    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({
            message: `Database connection failed: ${error.message}`,
        }, {
            status: 500  // Internal Server Error
        });
    }
}
