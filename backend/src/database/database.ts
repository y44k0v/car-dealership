import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";
import path from "path";

let db: Database | null = null;

export async function initializeDatabase() {
    const dbPath = path.resolve(__dirname, "../database/car-dealership.db");
    db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });


    await db.exec(`
    CREATE TABLE IF NOT EXISTS cars (
        id TEXT PRIMARY KEY,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        year INTEGER NOT NULL,
        price REAL NOT NULL
    );
    `);

    return db;
}

export function getDb() {
    if (!db) {
        throw new Error("Database not initialized");
    }
    return db;
}