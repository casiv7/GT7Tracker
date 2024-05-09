import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "GT7Tracker",
    password: "dbPractice",
    port: 5432
});
db.connect();

//middleware
app.use(express.json());
app.use(cors());

//get stats
app.get("/", async (req, res) => {
    const stats = await db.query("SELECT * FROM stats");
    res.json(stats.rows);
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});