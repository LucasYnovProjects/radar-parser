import express, { Response, Request, Application } from "express";
import { Reporter2000XML } from "./entities/Reporter2000XML";
import bodyParser from "body-parser";
import xml2js from "xml2js";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/test", bodyParser.text({ type: "application/xml" }), (req: Request, res: Response) => {
  xml2js.parseString(req.body, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Parse xml error");
    }

    const reporter2000 = new Reporter2000XML();
    const data = reporter2000.parse(result);

    console.log(data);

    return res.send("ok");
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
