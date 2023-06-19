import {PDFMaker} from "../models/pdf/PDFMaker"

export interface PDFConverterText {
  message: string,
  attributes?: any,
}

export interface PDFConverterImage {
  src: string,
  x?: number,
  y?: number,
  attributes?: any,
}

export interface PDFConverter {
  img(config: PDFConverterImage): PDFMaker
  text(config: PDFConverterText): PDFMaker
  font(fontName: string): PDFMaker
  fontSize(size: number): PDFMaker
  newLine(lineCount: number): PDFMaker
  build(): void
}