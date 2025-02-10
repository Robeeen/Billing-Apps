import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Invoices } from '@/db/schema';

const pool = new Pool({ 
    connectionString: process.env.XATA_DATABASE_URL, 
    ssl: { rejectUnauthorized: false },
    max: 20 
});
export const db = drizzle(pool, {
    schema: {
        Invoices
    }
});

//Shams added
const connectionString = process.env.XATA_DATABASE_URL;
if (!connectionString) {
    throw new Error("XATA_DATABASE_URL is not defined. Check your .env.local file.");
}else{
    console.log('perfect');
}



