"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RadarFactory_1 = require("./radars/RadarFactory");
const RadarFormatNotSupported_1 = require("./radars/errors/RadarFormatNotSupported");
const body_parser_1 = __importDefault(require("body-parser"));
const findIncidentByDate_1 = __importDefault(require("./queries/findIncidentByDate"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post('/', body_parser_1.default.text({ type: "application/xml" }), (req, res) => {
    const adapter = new RadarFactory_1.RadarFactory(req.body);
    try {
        const radar = adapter.parse();
        const data = radar.value();
        res.json(data);
    }
    catch (err) {
        if (err instanceof RadarFormatNotSupported_1.RadarFormatNotSupported) {
            return res.status(501).send("Can't parse data, because format is not implemented");
        }
        res.send(err);
    }
});
app.get('/', (req, res) => {
    const { date } = req.body;
    try {
        const incidents = (0, findIncidentByDate_1.default)(date);
        res.json(incidents);
    }
    catch (err) {
        if (err instanceof RadarFormatNotSupported_1.RadarFormatNotSupported) {
            return res.status(501).send("Can't parse data, because format is not implemented");
        }
        res.send(err);
    }
});
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
