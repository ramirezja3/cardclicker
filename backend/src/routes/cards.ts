import { Router } from "express";
import pool from "../db";

const router = Router();

// Get all cards
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM cards ORDER BY number ASC");
  res.json(result.rows);
});

// Register a click
router.post("/:id/click", async (req, res) => {
  const { id } = req.params;

  // Check if first click exists
  const result = await pool.query("SELECT * FROM cards WHERE id=$1", [id]);
  const card = result.rows[0];

  let query;
  if (!card.first_click) {
    query = "UPDATE cards SET click_count=click_count+1, first_click=NOW() WHERE id=$1 RETURNING *";
  } else {
    query = "UPDATE cards SET click_count=click_count+1 WHERE id=$1 RETURNING *";
  }

  const updated = await pool.query(query, [id]);
  res.json(updated.rows[0]);
});

// Clear all cards
router.post("/clear", async (_req, res) => {
  await pool.query("UPDATE cards SET click_count=0, first_click=NULL");
  const result = await pool.query("SELECT * FROM cards ORDER BY number ASC");
  res.json(result.rows);
});

export default router;
