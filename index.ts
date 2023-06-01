import express, {Response, Request, Application} from 'express';
import { b612_parser } from './entities/b612_parser';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post('/test', (req: Request, res: Response) => {
  const mythings = new b612_parser();
  
  res.send(mythings.parse(req.body));
});


app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});