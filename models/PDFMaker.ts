import {PDFConverter, PDFConverterImage} from "../types/PDFConverter";
import PDFKit from "pdfkit";

export class PDFMaker implements PDFConverter {
  private doc: PDFKit.PDFDocument;

  constructor(attributes: any) {
    this.doc = new PDFKit(attributes);
  }
  finish(): void {
    this.doc.end();
  }
  getPage(): any {
    return this.doc.page;
  }
  output(destination: NodeJS.WritableStream): PDFMaker {
    this.doc.pipe(destination);
    return this;
  }
  img({src, x, y, attributes}: PDFConverterImage): PDFMaker {
    this.doc.image(src, x, y, attributes);
    return this;
  }
  text(message: string, attributes?: any): PDFMaker {
    this.doc.text(message, attributes);
    return this;
  }
  font(fontName: string): PDFMaker {
    this.doc.font(fontName);
    return this;
  }
  fontSize(size: number): PDFMaker {
    this.doc.fontSize(size);
    return this;
  }
  newLine(lineCount: number): PDFMaker {
    this.doc.moveDown(lineCount);
    return this;
  }
}