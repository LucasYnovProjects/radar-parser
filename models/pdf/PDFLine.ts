import {PDFConverterImage} from "../../types/PDFConverter";

export class PDFLine {
  constructor(
    private instance: PDFKit.PDFDocument,
    private lineCount: number
  ) {
    this.instance.moveDown(this.lineCount);
  }
}