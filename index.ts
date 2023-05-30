import express, {Response, Request, Application} from 'express';
import {AwesomeRadar} from './entities/AwesomeRadar';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  const adapter = new RadarAdapter(req.body);
  const parser = adapter.selectParser();
  if (!parser) {
    res.status(400).send('Format is not supported');
  }
  res.json(parser.parse());
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});