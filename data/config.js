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
