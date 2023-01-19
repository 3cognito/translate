import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { testFxn, translate } from "./tools";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// app.get('/translate', )

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  const res = await testFxn("./Tommy.pdf");
  const test: any = await translate(res, "french");
  console.log(test.data.choices[0].text);
});
