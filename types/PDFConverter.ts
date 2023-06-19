import {output} from "pdfkit"
import {PDFMaker} from "../models/PDFMaker"

export interface PDFConverterImage {
  src: string,
  x?: number,
  y?: number,
  attributes?: any,
}

export interface PDFConverter {
  img({src, x, y, attributes}: PDFConverterImage): PDFMaker
  output(destination: NodeJS.WritableStream): PDFMaker
  text(message: string, attributes?: any): PDFMaker
  font(fontName: string): PDFMaker
  fontSize(size: number): PDFMaker
  newLine(lineCount: number): PDFMaker
  finish(): void

  getPage(): any
}