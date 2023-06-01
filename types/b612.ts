export interface b612 {
    name: string,
    localisation: string,
    reports: b612Reports[]
}

interface b612Reports {
    licencePlate: string,
    speed: string, 
    date: string, 
    evidenceUrl: string
}