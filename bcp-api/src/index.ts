import express, { Request, Response, Application } from "express";
let cors = require("cors");

const app: Application = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post("/survey", (req: Request, res: Response): void => {
  try {
    console.log(req.body);
    res.status(200).json("Data received successfully");
  } catch (error) {
    console.log("Error reciving data: ", error);
  }
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`);
});
