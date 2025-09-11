import express from "express";
import cors from "cors";
import cardsRouter from "./routes/cards.js";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/cards", cardsRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
