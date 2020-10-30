import { createStore, combineReducers } from "redux";

import { EnemiesReducer } from "./Enemies/reducers";
import { EnemiesState } from "./Enemies/types";
import { PlayerReducer } from "./Player/reducers";
import { PlayerState } from "./Player/types";

const rootReducer = combineReducers({
  Enemies: EnemiesReducer,
  Player: PlayerReducer
});

export type AppState = {
  Enemies: EnemiesState;
  Player: PlayerState;
};

export const store = () => createStore(rootReducer);
