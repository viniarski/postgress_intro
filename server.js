import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONNECTIONSTRING,
});

app.get('/make-table', async (req, res) => {
  const result = await db.query(`CREATE TABLE example IF NOT EXISTS (
        id PRIMARY KEY INT,
        solecolumn VARCHAR(8)
    )`);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
