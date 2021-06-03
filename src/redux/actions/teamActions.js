import {ActionTypes} from "../constants/action-types";

export const setTeams = (teams) => {
    return {
        type: ActionTypes.SET_TEAMS,
        payload: teams,
    }
}

export const selectyuyu65tyututyedTeam = (team) => {
    return {
        type: ActionTypes.SELECTED_TEAM,
        payload: team,
    }
}
