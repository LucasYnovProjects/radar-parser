import {PDFConverterImage} from "../../types/PDFConverter";

export class PDFImage {
  constructor(
    private instance: PDFKit.PDFDocument,
    private config: PDFConverterImage
  ) {
    this.instance.image(
      this.config.src,
      this.config.x,
      this.config.y,
      this.config.attributes
    );
  }
}