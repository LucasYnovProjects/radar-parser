export class PDFFontSize {
  constructor(
    private instance: PDFKit.PDFDocument,
    private size: number
  ) {
    this.instance.fontSize(this.size);
  }
}