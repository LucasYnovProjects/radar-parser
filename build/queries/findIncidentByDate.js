"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryRadarRepository_1 = require("../repositories/InMemoryRadarRepository");
exports.default = (date) => {
    const repository = new InMemoryRadarRepository_1.InMemoryRadarRepository();
    return repository.findByDate(date);
};
