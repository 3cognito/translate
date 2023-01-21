import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { translateController } from "./controller";
import multer from "multer";

const upload = multer();
dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/translate", upload.single("file"), translateController);

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
