import fs from "node:fs/promises";
import { PDFParse } from "pdf-parse";

const buffer = await fs.readFile("public/docs/David_Kuo_CV.pdf");
const parser = new PDFParse({ data: buffer });
const data = await parser.getText();
await parser.destroy();
console.log(data.text);
