import * as fs from "fs";
import pdf, { Result } from "pdf-parse";

const testFxn = async (pathToFile: string): Promise<Result | undefined> => {
  try {
    const pdfBuffer: Buffer = fs.readFileSync(pathToFile);
    const data: Result = await pdf(pdfBuffer);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default testFxn;
