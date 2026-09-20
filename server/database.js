const Database = require ('better-sqlite3');
const db = new Database ('database.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS tareas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        completada INTEGER DEFAULT 0
    )
`);

module.exports = db;