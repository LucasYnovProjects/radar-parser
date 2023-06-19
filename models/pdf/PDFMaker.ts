import {createWriteStream} from "fs";
import {PDFConverter, PDFConverterImage, PDFConverterText} from "../../types/PDFConverter";
import {PDFImage} from "./PDFImage";
import {PDFLine} from "./PDFLine";
import {PDFText} from "./PDFText";
import {PDFFont} from "./PDFFont";
import {PDFFontSize} from "./PDFFontSize";

export class PDFMaker implements PDFConverter {
  constructor(
    private instance: PDFKit.PDFDocument,
    private fileName: string
  ) {
    const stream = createWriteStream(this.fileName);
    this.instance.pipe(stream);
  }
  build(): void {
    this.instance.end();
  }
  img(config: PDFConverterImage): PDFMaker {
    new PDFImage(this.instance, config);
    return this;
  }
  text(config: PDFConverterText): PDFMaker {
    new PDFText(this.instance, config);
    return this;
  }
  font(name: string, size?: number): PDFMaker {
    new PDFFont(this.instance, name, size);
    return this;
  }
  fontSize(size: number): PDFMaker {
    new PDFFontSize(this.instance, size)
    return this;
  }
  newLine(lineCount: number): PDFMaker {
    new PDFLine(this.instance, lineCount);
    return this;
  }
}