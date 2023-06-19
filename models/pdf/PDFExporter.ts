import {IRadarIncident} from "../RadarIncident";
import {PDFMaker} from "./PDFMaker";
import PDFKit from "pdfkit";

export class PDFExporter {
  constructor(private readonly incidents: IRadarIncident[]) { }

  generateReport() {
    try {
      const instance = new PDFKit({margin: 30});
      const doc = new PDFMaker(instance, 'incidents_report.pdf');

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

      doc.img({
        src: __dirname + "/../../images/spacex.png",
        x: instance.page.width - 150,
        y: 10,
        attributes: {
          width: 150,
          align: "center",
        }
      })
        .font("Helvetica-Bold", 20)
        .newLine(1)
        .text({message: "Incidents", attributes: {align: "center", underline: true}})
        .newLine(1);

      for (let i = 0; i < dates.length; i++) {
        const date = dates[i];

        doc.font("Helvetica-Bold", 13)
          .text({message: `Date ${new Date(date).toLocaleDateString()}`})
          .newLine(1);

        this.incidents
          .filter((e) => new Date(e.date).toDateString() === date)
          .map((e) => {
            doc.font("Helvetica", 12)
              .text({message: `- ${e.license}:`})
              .fontSize(9)
              .text({message: `Speed : ${e.speed}km/h`, attributes: {indent: 20}})
              .text({message: `Vehicle : ${e.vehicle ? e.vehicle?.type : 'none'}`, attributes: {indent: 20}})
              .text({message: `Brand : ${e.vehicle ? e.vehicle?.brand : 'none'}`, attributes: {indent: 20}})
              .newLine(1);
          });
      }

      doc.font("Helvetica-Bold", 15)
        .newLine(1)
        .text({message: `Nombre d'incidents : ${this.incidents.length}`});
      doc.build();
    } catch (error) {
      console.log(error);
    }
  }
}
