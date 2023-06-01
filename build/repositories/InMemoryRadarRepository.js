"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRadarRepository = void 0;
class InMemoryRadarRepository {
    constructor() {
        this.data = [
            {
                localisation: "Lyon 7e",
                incidents: [
                    {
                        speed: 120,
                        license: "BH-686-AM",
                        date: "2023-01-01",
                        evidenceUrl: "https://image.com"
                    },
                    {
                        speed: 120,
                        license: "BH-686-AM",
                        date: "2023-01-02",
                        evidenceUrl: "https://image.com"
                    },
                    {
                        speed: 120,
                        license: "BH-686-AM",
                        date: "2023-04-01",
                        evidenceUrl: "https://image.com"
                    }
                ]
            },
            {
                localisation: "Lyon 7e",
                incidents: [
                    {
                        speed: 90,
                        date: "2023-01-01T00:00:00Z",
                        license: "BH-686-AM"
                    },
                    {
                        speed: 90,
                        date: "2023-01-01T00:00:00Z",
                        license: "BH-686-AM"
                    },
                    {
                        speed: 90,
                        date: "2023-01-01T00:00:00Z",
                        license: "BH-686-AM"
                    }
                ]
            },
            {
                localisation: "Lyon 7e",
                incidents: [
                    {
                        speed: 120,
                        license: "BH-686-AM",
                        date: "2023-01-01",
                        vehicle: {
                            brand: "Suzuki",
                            type: "motocycle"
                        }
                    },
                    {
                        speed: 150,
                        license: "BM-767-EM",
                        date: "2023-01-01",
                        vehicle: {
                            brand: "Suzuki",
                            type: "motocycle"
                        }
                    },
                    {
                        speed: 260,
                        license: "BM-767-EM",
                        date: "2023-01-01",
                        vehicle: {
                            brand: "Suzuki",
                            type: "motocycle"
                        }
                    }
                ]
            }
        ];
    }
    getAllIncidents() {
        return this.data.reduce((acc, radar) => {
            return [
                ...acc,
                ...radar.incidents
            ];
        }, []);
    }
    findByDate(dateString) {
        const date = new Date(dateString).toDateString();
        const allIncidents = this.getAllIncidents();
        const results = allIncidents.filter((result) => new Date(result.date).toDateString() === date);
        return results;
    }
}
exports.InMemoryRadarRepository = InMemoryRadarRepository;
