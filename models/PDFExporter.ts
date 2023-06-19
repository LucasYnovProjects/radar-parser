import {IRadarIncident} from "./RadarIncident";
import fs from "fs";
import {PDFMaker} from "./PDFMaker";

export class PDFExporter {
  constructor(private readonly incidents: IRadarIncident[]) { }

  generateReport() {
    try {
      const doc = new PDFMaker({margin: 30});
      doc.output(fs.createWriteStream("incidents_report.pdf"));

      const dates = this.incidents.reduce(
        (prev: string[], curr: IRadarIncident, i: number) => {
          if (!prev.includes(new Date(curr.date).toDateString())) {
            return [
              ...prev,
              new Date(curr.date).toDateString()
            ];
          }
          return prev;
        },
        []
      );

      doc
        .img({
          src: __dirname + "/../images/spacex.png",
          x: doc.getPage().width - 150,
          y: 10, 
          attributes: {
            width: 150,
            align: "center",
          }
        })
        .fontSize(20)
        .font("Helvetica-Bold")
        .newLine(1)
        .text("Incidents", {align: "center", underline: true})
        .newLine(1);

      for (let i = 0; i < dates.length; i++) {
        const date = dates[i];

        doc
          .fontSize(13)
          .font("Helvetica-Bold")
          .text(`Date ${new Date(date).toLocaleDateString()}`)
          .newLine(1);

        this.incidents
          .filter((e) => new Date(e.date).toDateString() === date)
          .map((e) => {
            doc.font("Helvetica")
              .fontSize(12)
              .text(`- ${e.license}:`)
              .fontSize(9)
              .text(`Speed : ${e.speed}km/h`, {indent: 20})
              .text(`Vehicle : ${e.vehicle ? e.vehicle?.type : 'none'}`, {indent: 20})
              .text(`Brand : ${e.vehicle ? e.vehicle?.brand : 'none'}`, {indent: 20})
              .newLine(1);
          });
      }

      doc.fontSize(15)
        .font("Helvetica-Bold")
        .newLine(1)
        .text(`Nombre d'incidents : ${this.incidents.length}`);
      doc.finish();
    } catch (error) {
      console.log(error);
    }
  }
}
