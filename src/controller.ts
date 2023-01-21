import { Request, Response } from "express";
import { testFxn, translate } from "./tools";

declare namespace Express {
  export interface Request {
    file?: any;
  }
}

const translateController = async (req: Request, res: Response) => {
  try {
    const fileBuffer: any = req.file?.buffer;
    const resp = await testFxn(fileBuffer);
    const test: any = await translate(resp, "french");
    const data: string = test.data.choices[0].text;
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};

export { translateController };
