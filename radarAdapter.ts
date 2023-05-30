class RadarAdapter {
    constructor(
        private readonly data :any
    ) {}

    selectParser() : Radar | undefined {
        const formatAdapters: { [key: string]: Radar } = {
            AwesomeRadar: new awesomeRadarAdapter(),
            B612: new B612Adapter(),
            Reporter2000: new reporter2000Adapter(),
        };
        let adapter: Radar | undefined;

        // Essaie chaque adaptateur avec les données jusqu'à ce qu'un adaptateur réussisse
        Object.keys(formatAdapters).some((key) => {
            const currentAdapter = formatAdapters[key];
            try {
                currentAdapter.parse(this.data);
                adapter = currentAdapter;
                return true; // Sort de la boucle si l'adaptateur fonctionne
            } catch (error) {
                return false; // Continue avec le prochain adaptateur si une exception est levée
            }
        }); 
        return adapter;
    }
}
