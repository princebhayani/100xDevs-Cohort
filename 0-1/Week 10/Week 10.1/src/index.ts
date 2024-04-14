import { Client } from "pg";

const client = new Client({
    connectionString:
        "postgresql://princebhayani127:Sg8mnHcvOzX6@ep-soft-cherry-a1yj5i6g.ap-southeast-1.aws.neon.tech/test?sslmode=require",
});



// async function createUsersTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE users(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )
//     `)
//     console.log(result);
// }

// createUsersTable();


/*
// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
    
    try {
 // Ensure client connection is established
 const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
 const values = [username, email, password];
 const res = await client.query(insertQuery, values);
 console.log('Insertion success:', res); // Output insertion result
} catch (err) {
 console.error('Error during the insertion:', err);
} finally {
 await client.end(); // Close the client connection
}
}


insertData('username5', 'user5@example.com', 'user_password').catch(console.error);

*/

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    try {
        await client.connect();
        // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
getUser('user5@example.com').catch(console.error);