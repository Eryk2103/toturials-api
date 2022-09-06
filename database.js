import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}).promise()

export async function getSkills() {
    const [rows] = await pool.query("SELECT * FROM skills")
    return rows
}
