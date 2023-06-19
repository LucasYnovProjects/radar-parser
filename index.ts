import express, {Response, Request, Application} from 'express';
import {RadarFactory} from './radars/RadarFactory';
import {Radar} from './models/Radar';
import {RadarFormatNotSupported} from './radars/errors/RadarFormatNotSupported';
import bodyParser from "body-parser";
import findIncidentByDate from './queries/getIncidentsByDate';
import {InMemoryRadarRepository} from './repositories/InMemoryRadarRepository';
import {PDFExporter} from './models/PDFExporter';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', bodyParser.text({type: "application/xml"}), (req: Request, res: Response) => {
  const adapter = new RadarFactory(req.body);
  try {
    const radar: Radar = adapter.parse();
    const data = radar.value();
    res.json(data);
  } catch (err) {
    if (err instanceof RadarFormatNotSupported) {
      return res.status(501).send("Can't parse data, because format is not implemented")
    }
    res.send(err);
  }
});

app.get('/', (req: Request, res: Response) => {
  const {date} = req.body;
  try {
    const incidents = findIncidentByDate(date);
    res.json(incidents);
  } catch (err) {
    res.send(err);
  }
});

app.get("/test", (req: Request, res: Response) => {
  const repo = new InMemoryRadarRepository();
  const data = repo.getAllIncidents();
  const pdfMaker = new PDFExporter(data);
  pdfMaker.generateReport();
  res.send("ok")
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
