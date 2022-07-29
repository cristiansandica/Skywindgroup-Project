import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    games: []
}

export const gamesFetch = createAsyncThunk( //it has 3 parameters
    "games/gamesFetch", // "action-type-we-named-below"/"const gamesFetch"
    () => {

    }
)

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        addGames: (state, action) => {
            state.games = action.payload;
        },

        // take the state and update the property
        // updating the games property
    },
    // extraReducers: {}
});

export const { addGames } = gameSlice.actions;
export const getAllGames = (state) => state.games.games //state.name.games[]
export default gameSlice.reducer;