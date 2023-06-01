import express, {Response, Request, Application} from 'express';
import {RadarAdapter} from './entities/RadarAdapter';
import {IRadarData} from './types/IRadarData';
import {RadarFormatNotSupported} from './entities/RadarFormatNotSupported';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', (req: Request, res: Response) => {
  const adapter = new RadarAdapter(req.body);
  try {
    const data: IRadarData = adapter.parse();
    res.json(data);
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