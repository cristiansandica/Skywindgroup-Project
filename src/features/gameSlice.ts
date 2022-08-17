import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// interface
import {IGameDetail} from "../components/Data/Data";
import { RootState } from "./store";

interface IGames {
  games: IGameDetail[];
}

const initialState: IGames = {
    games: []
}

// export const gamesFetch = createAsyncThunk( //it has 3 parameters
//     "games/gamesFetch", // "action-type-we-named-below"/"const gamesFetch"
//     () => {

//     }
// )

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        addGames: (state: IGames, action: PayloadAction<IGameDetail[]>) => {
            state.games = action.payload;
        },

        // take the state and update the property
        // updating the games property
    },
    // extraReducers: {}
});

export const { addGames } = gameSlice.actions;
export const getAllGames = (state: RootState) => state.games.games //state.name.games[]
export default gameSlice.reducer;