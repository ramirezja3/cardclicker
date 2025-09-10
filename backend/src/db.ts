import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "clickcards",
  password: "postgres",
  port: 5432,
});

export default pool;