import * as fs from "fs";
import pdf, { Result } from "pdf-parse";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const config = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(config);

const testFxn = async (pathToFile: string): Promise<string | undefined> => {
  try {
    const pdfBuffer: Buffer = fs.readFileSync(pathToFile);
    const data: Result = await pdf(pdfBuffer);
    return data.text;
  } catch (err) {
    console.log(err);
  }
};

const translate = async (
  text: string | undefined,
  lang: string
): Promise<String | undefined> => {
  try {
    const prompt: string = `Translate ${text} to ${lang}`;

    const result: any = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2040,
    });

    console.log(result.data.choices[0].text);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { testFxn, translate };
