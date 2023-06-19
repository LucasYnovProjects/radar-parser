export class PDFFont {
  constructor(
    private instance: PDFKit.PDFDocument,
    private name: string,
    private size?: number
  ) {
    this.instance.font(this.name, this.size);
  }
}