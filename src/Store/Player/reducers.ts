import produce from "immer";
import {
  PlayerState,
  PlayerActionTypes,
  GET_ATTACK,
  UPDATE_DEAD_ENEMY_COUNTER
} from "./types";
import { increaseExperience, getAttack } from "../basicFunctions";
import { PlayerData } from "./data";
import { Skills } from "../basicData";

export const initialState: PlayerState = {
  player: PlayerData,
  enemyDeadCounter: 0,
  Skills: [Skills.passive.BlassedByAbuss],
  Bag: [
    {
      name: "",
      effect: "",
      fieldInEntityObject: "",
      counter: 1
    }
  ]
};

export const PlayerReducer = produce(
  (draftState: PlayerState, action: PlayerActionTypes) => {
    switch (action.type) {
      case GET_ATTACK:
        const { attack } = action;
        const isPlayerDead = getAttack(attack, draftState.player);
        if (isPlayerDead) {
          draftState.player.level -= 1;
          draftState.player.maxHp -= Math.round(
            (draftState.player.maxHp / 100) * 1
          );
          draftState.player.hp = draftState.player.maxHp;
          draftState.enemyDeadCounter -= 1;
        }
        return;
      case UPDATE_DEAD_ENEMY_COUNTER:
        const { counter, enemy } = action;
        draftState.enemyDeadCounter += counter;
        increaseExperience(draftState.player, enemy.attack);
        return;
    }
  },
  initialState
);
