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
                memberNames: [],
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
                isPaused: false
            };
        }
    }

    saveState() {
        localStorage.setItem('rallye_team_state', JSON.stringify(this.state));
    }

    registerTeam(teamName, memberNamesString) {
        if (!teamName || teamName.trim() === "") return false;

        const members = memberNamesString 
            ? memberNamesString.split(',').map(name => name.trim()).filter(n => n.length > 0)
            : [];

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
