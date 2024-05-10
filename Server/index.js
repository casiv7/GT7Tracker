import express from "express";
import env from "dotenv";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 3000;
env.config({ path: "../.env" });

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
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