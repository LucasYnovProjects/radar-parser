import express, {Response, Request, Application} from 'express';
import {RadarFactory} from './radars/RadarFactory';
import {Radar} from './models/Radar';
import {RadarFormatNotSupported} from './radars/errors/RadarFormatNotSupported';
import bodyParser from "body-parser";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', bodyParser.text({type: "application/xml"}), (req: Request, res: Response) => {
  const adapter = new RadarFactory(req.body);
  try {
    const radar: Radar = adapter.parse();
    res.json(radar.value());
  } catch (err) {
    if (err instanceof RadarFormatNotSupported) {
      return res.status(501).send("Can't parse data, because format is not implemented")
    }
    return err;
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
