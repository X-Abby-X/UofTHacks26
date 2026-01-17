// frontend/lib/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './db/schema'; // Import everything from your schema file

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);

// Pass the schema here! This is what fixes the "Property courses does not exist" error.
export const db = drizzle(client, { schema });
