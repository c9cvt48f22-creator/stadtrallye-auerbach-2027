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
        description: "Die Grubenlampe flackert! Löst das Rätsel vor Ort und gebt den korrekten Zahlencode ein.",
        solution: "1488",
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
        description: "Bringt die 5 historischen Ereignisse in die exakte chronologische Reihenfolge.",
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
        description: "Wer saß an welchem Tisch und hat was bestellt? Löst das 4×4-Logikrätsel.",
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
        description: "Findet den historischen Fehler in Stromers Lebensgeschichte heraus.",
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
        description: "Findet alle versteckten Auerbacher Begriffe (AUEROCHSE, BERGWERK, RATHAUS, LÖWE).",
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
        description: "Nutzt das Cäsar-Alphabet, um die verschlüsselte Inschrift zu entschlüsseln.",
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
        description: "Entschlüsselt die Morse-Nachricht am Brunnen.",
        solution: "BRUNNEN",
        clueToNext: "Ihr habt alle Stationen 1-9 geschafft! Begebt euch zum großen Finale!",
        points: 15
    },
    {
        id: "station-10",
        name: "Station 10 – Finale",
        locationDescription: "Finaler Treffpunkt",
        qrIdentifier: "station-10",
        taskType: "FINALE",
        title: "Das große Finale",
        description: "Botschaft: Nichts ging damals alleine – und genauso ist es heute beim Bürgerfest 2027!",
        isAlwaysLastForEveryone: true,
        points: 0
    }
];

export const ROUTES = {
    routeA: ["station-01", "station-03", "station-02", "station-05", "station-04", "station-07", "station-06", "station-09", "station-08", "station-10"],
    routeB: ["station-02", "station-04", "station-01", "station-06", "station-03", "station-08", "station-07", "station-01", "station-05", "station-10"],
    routeC: ["station-03", "station-01", "station-05", "station-04", "station-02", "station-06", "station-09", "station-08", "station-07", "station-10"],
    routeD: ["station-04", "station-02", "station-06", "station-03", "station-01", "station-05", "station-08", "station-07", "station-09", "station-10"],
    routeE: ["station-05", "station-06", "station-03", "station-01", "station-02", "station-04", "station-07", "station-09", "station-08", "station-10"]
};
