import { IRadarIncident } from "./RadarIncident";
import PDFDocument from "pdfkit";
import fs from "fs";

export class PDFMaker {
  constructor(private readonly incidents: IRadarIncident[]) {}

  generateReport() {
    try {
      const doc = new PDFDocument({ margin: 50 });
      doc.pipe(fs.createWriteStream("incidents_report.pdf"));

      const dates = this.incidents.reduce(
        (prev: string[], curr: IRadarIncident, i: number) => {
          if (!prev.includes(curr.date)) return [...prev, curr.date];
          return [];
        },
        []
      );

      doc
        .image(__dirname + "/../images/spacex.png", doc.page.width - 250, 50, {
          width: 200,
          align: "center",
        })
        .fontSize(40)
        .font("Helvetica-Bold")
        .moveDown(2)
        .text("Incidents", { align: "center", underline: true })
        .moveDown(1);

      for (let i = 0; i < dates.length; i++) {
        const date = dates[i];

        doc
          .fontSize(20)
          .text(`Date ${new Date(date).toLocaleDateString()}`)
          .moveDown(1);

        const incidentsByDate = this.incidents
          .filter((e) => e.date === date)
          .map((e) => e.license);

        doc.font("Helvetica").fontSize(14).list(incidentsByDate);
      }

      doc.moveDown(1).text(`Nombre d'incidents : ${this.incidents.length}`);
      doc.end();
    } catch (error) {
      console.log(error);
    }
  }
}
