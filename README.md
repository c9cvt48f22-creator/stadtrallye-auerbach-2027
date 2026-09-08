# stadtrallye-auerbach-2027
// data/config.js
export const GAME_CONFIG = {
    projectName: "Stadtrallye Bürgerfest 2027",
    location: "Auerbach in der Oberpfalz",
    targetGroup: "10-18 Jahre",
    scoring: {
        basePoints: 10,
        wrongAnswerPenalty: 2,
        hintPenalty: 3,
        skipPenalty: 5
    },
    gameStates: {
        NOT_STARTED: "NOT_STARTED",
        ACTIVE: "ACTIVE",
        PAUSED: "PAUSED",
        STATION_ACTIVE: "STATION_ACTIVE",
        STATION_COMPLETED: "STATION_COMPLETED",
        FINISHED: "FINISHED"
    }
};
// data/stations.js
export const STATIONS = [
    {
        id: "station-01",
        name: "Station 1 – Rathaus",
        locationDescription: "Schlossplatz / Rathaus",
        qrIdentifier: "station-01",
        taskType: "STADTWAPPEN",
        title: "Stadtwappen-Puzzle",
        description: "Betrachtet das eingebettete Stadtwappen und benennt die drei Pflicht-Berge des Auerbacher Stadtwappens.",
        requiresEmbeddedWappen: true,
        mandatorySubtasks: ["Gottvaterberg", "Grünberg", "Pinzigberg"],
        clueToNext: "Geht als Nächstes zu der Station laut eurer geheimen Route!",
        points: 10
    },
    {
        id: "station-02",
        name: "Station 2 – Bergleute",
        locationDescription: "Historischer Bergbau-Punkt",
        qrIdentifier: "station-02",
        taskType: "MINING_CODE",
        title: "Bergleute – Grubenlicht-Code",
        description: "Die Grubenlampe flackert! Löst das Rätsel vor Ort und gebt den korrekten Zahlencode ein, um das Licht wieder zu aktivieren.",
        solution: "1488", // Platzhalter für das historische Jahr oder Code
        clueToNext: "Gut gemacht! Folgt dem nächsten Hinweis auf eurer Route.",
        points: 10
    },
    {
        id: "station-03",
        name: "Station 3 – Jahreszahlen",
        locationDescription: "Historischer Ort in Auerbach",
        qrIdentifier: "station-03",
        taskType: "CHRONOLOGY",
        title: "Jahreszahlen-Knobelei",
        description: "Bringt die 5 historischen Ereignisse aus Auerbachs Geschichte in die exakte chronologische Reihenfolge (von früher nach heute).",
        clueToNext: "Stark! Weiter geht's zur nächsten Station.",
        points: 10
    },
    {
        id: "station-04",
        name: "Station 4 – Goldener Löwe",
        locationDescription: "Ehemaliges Hotel Goldener Löwe",
        qrIdentifier: "station-04",
        taskType: "LOGIC_4X4",
        title: "Goldener Löwe – Gästebuch-Rätsel",
        description: "Wer saß an welchem Tisch und hat was bestellt? Löst das 4×4-Logikrätsel anhand der Aussagen der Gäste.",
        clueToNext: "Der Code öffnet den Weg zur nächsten Station!",
        points: 15
    },
    {
        id: "station-05",
        name: "Station 5 – Heinrich Stromer",
        locationDescription: "Heinrich-Stromer-Gedenkpunkt",
        qrIdentifier: "station-05",
        taskType: "STROMER_QUIZ",
        title: "Dr. Heinrich Stromer (Dr. Auerbach)",
        description: "Findet den historischen Fehler in Stromers Lebensgeschichte heraus und korrigiert ihn.",
        clueToNext: "Weiter geht eure Reise durch Auerbach!",
        points: 10
    },
    {
        id: "station-06",
        name: "Station 6 – Auerochse",
        locationDescription: "Auerochsen-Punkt",
        qrIdentifier: "station-06",
        taskType: "STANDARD",
        title: "Der Auerochse von Auerbach",
        description: "Löst die Aufgabe rund um das Wappentier und die Geschichte des Auerochsen.",
        clueToNext: "Super! Ab zur nächsten Station.",
        points: 10
    },
    {
        id: "station-07",
        name: "Station 7 – Bücherei",
        locationDescription: "Stadtbücherei Auerbach",
        qrIdentifier: "station-07",
        taskType: "WORD_GRID",
        title: "Zerrissene Nachricht & Buchstabensalat",
        description: "Findet alle versteckten Auerbacher Begriffe (wie AUEROCHSE, BERGWERK, RATHAUS, LÖWE) im Buchstabensalat.",
        targetWords: ["AUEROCHSE", "BERGWERK", "RATHAUS", "LÖWE"],
        clueToNext: "Alle Wörter gefunden! Auf zur nächsten Station.",
        points: 10
    },
    {
        id: "station-08",
        name: "Station 8 – Kirche & Eisenerzaltar",
        locationDescription: "Stadtpfarrkirche",
        qrIdentifier: "station-08",
        taskType: "CAESAR_CIPHER",
        title: "Der Eisenerzaltar – Geheimschrift",
        description: "Nutzt das Cäsar-Alphabet, um die verschlüsselte Inschrift am Eisenerzaltar zu entschlüsseln.",
        solution: "NEWYORK",
        clueToNext: "Das Rätsel ist gelöst! Weiter geht's.",
        points: 15
    },
    {
        id: "station-09",
        name: "Station 9 – Goldener Brunnen",
        locationDescription: "Goldener Brunnen / Eis und Co.",
        qrIdentifier: "station-09",
        taskType: "MORSE",
        title: "Morse-Code am Goldenen Brunnen",
        description: "Entschlüsselt die Morse-Nachricht, die am Brunnen hinterlegt ist.",
        solution: "BRUNNEN",
        clueToNext: "Ihr habt alle Stationen 1-9 geschafft! Begebt euch nun zum großen Finale!",
        points: 15
    },
    {
        id: "station-10",
        name: "Station 10 – Finale",
        locationDescription: "Finaler Treffpunkt",
        qrIdentifier: "station-10",
        taskType: "FINALE",
        title: "Das große Finale",
        description: "Botschaft der Vergangenheit: Nichts ging damals alleine – und genauso ist es heute beim Bürgerfest 2027! Alle helfen zusammen.",
        isAlwaysLastForEveryone: true,
        points: 0
    }
];

// Mehrere unterschiedliche Routen (z. B. 5 Routen zur perfekten Entzerrung der Teams)
export const ROUTES = {
    routeA: ["station-01", "station-03", "station-02", "station-05", "station-04", "station-07", "station-06", "station-09", "station-08", "station-10"],
    routeB: ["station-02", "station-04", "station-01", "station-06", "station-03", "station-08", "station-07", "station-01", "station-05", "station-10"],
    routeC: ["station-03", "station-01", "station-05", "station-04", "station-02", "station-06", "station-09", "station-08", "station-07", "station-10"],
    routeD: ["station-04", "station-02", "station-06", "station-03", "station-01", "station-05", "station-08", "station-07", "station-09", "station-10"],
    routeE: ["station-05", "station-06", "station-03", "station-01", "station-02", "station-04", "station-07", "station-09", "station-08", "station-10"]
};
// js/app.js
import { GAME_CONFIG } from '../data/config.js';
import { STATIONS, ROUTES } from '../data/stations.js';

class RallyApp {
    constructor() {
        this.loadState();
    }

    loadState() {
        const saved = localStorage.getItem('rallye_team_state');
        if (saved) {
            this.state = JSON.parse(saved);
        } else {
            this.state = {
                teamName: null,
                memberNames: [], // Hier werden die Vornamen der Kinder gespeichert
                routeId: null,
                routeStations: [],
                currentStationIndex: 0,
                completedStations: [],
                skippedStations: [],
                points: 0,
                startTime: null,
                elapsedSeconds: 0,
                status: GAME_CONFIG.gameStates.NOT_STARTED,
                notes: "",
                tempNotes: "", // Für den Abbrechen-Button bei Notizen
                isPaused: false
            };
        }
    }

    saveState() {
        localStorage.setItem('rallye_team_state', JSON.stringify(this.state));
    }

    registerTeam(teamName, memberNamesString) {
        if (!teamName || teamName.trim() === "") return false;

        // Vornamen in ein Array umwandeln (z.B. getrennt durch Komma)
        const members = memberNamesString 
            ? memberNamesString.split(',').map(name => name.trim()).filter(n => n.length > 0)
            : [];

        // Automatische Verteilung auf eine der mehreren Routen (A bis E) im Hintergrund
        const routeKeys = Object.keys(ROUTES);
        const assignedKey = routeKeys[Math.floor(Math.random() * routeKeys.length)];

        this.state.teamName = teamName.trim();
        this.state.memberNames = members;
        this.state.routeId = assignedKey;
        this.state.routeStations = ROUTES[assignedKey];
        this.state.currentStationIndex = 0;
        this.state.status = GAME_CONFIG.gameStates.ACTIVE;
        this.state.startTime = Date.now();
        this.state.points = 0;

        this.saveState();
        return true;
    }

    getCurrentAssignedStation() {
        // Wenn das Spiel pausiert ist, geben wir keine aktive Station frei
        if (this.state.isPaused) return null;

        const stationId = this.state.routeStations[this.state.currentStationIndex];
        return STATIONS.find(s => s.id === stationId);
    }

    verifyScannedQRCode(scannedIdentifier) {
        if (this.state.isPaused) {
            return { success: false, message: "Das Spiel ist zurzeit pausiert. Ihr könnt keine QR-Codes scannen!" };
        }

        const currentStation = this.getCurrentAssignedStation();
        
        if (currentStation && currentStation.qrIdentifier === scannedIdentifier) {
            this.state.status = GAME_CONFIG.gameStates.STATION_ACTIVE;
            this.saveState();
            return { success: true, station: currentStation };
        } else {
            return { 
                success: false, 
                message: "Ihr habt den falschen Ort gewählt. Überlegt noch einmal genau und schaut euch euren Hinweis an!" 
            };
        }
    }

    pauseGame() {
        this.state.isPaused = true;
        this.state.status = GAME_CONFIG.gameStates.PAUSED;
        this.saveState();
    }

    resumeGame() {
        this.state.isPaused = false;
        this.state.status = GAME_CONFIG.gameStates.ACTIVE;
        this.saveState();
    }

    saveNotes(newNotes) {
        this.state.notes = newNotes;
        this.saveState();
    }
}

export const app = new RallyApp();
