import { Request, Response } from "express";
import { extractText, translate } from "./tools";

declare namespace Express {
  export interface Request {
    file?: any;
  }
}

const translateController = async (req: Request, res: Response) => {
  try {
    const { text, lang } = req.body;
    const test: any = await translate(text, lang);
    const data: string = test.data.choices[0].text;
    res.status(200).json({ message: "successful translation", data });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server error",
    });
    console.log(err);
  }
};

const convert = async (req: Request, res: Response) => {
  try {
    const fileBuffer: any = req.file?.buffer;
    const numPages: number = req.body.numPages;
    if (!req.file) {
      res.status(400).json({
        message: "No or invalid upload",
      });
    }
    const resp = await extractText(fileBuffer, numPages);
    res.status(200).json({
      message: "successful upload",
      data: resp,
    });
  } catch (err) {
    res.status(400).json({
      message: "Bad Request",
    });
    console.log(err);
  }
};

export { translateController, convert };
