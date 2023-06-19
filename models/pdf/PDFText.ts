import {PDFConverterText} from "../../types/PDFConverter";

export class PDFText {
  constructor(
    private instance: PDFKit.PDFDocument,
    private config: PDFConverterText
  ) {
    this.instance.text(this.config.message, this.config.attributes);
  }
}