import { UPDATE_DEAD_ENEMY_COUNTER, GET_ATTACK } from "./types";
import { EntityObject } from "../basicTypes";

export const attackPlayer = (attack: number) => {
  return {
    type: GET_ATTACK,
    attack
  };
};

export const updateEnemyDeadCounter = (
  counter: number,
  enemy: EntityObject
) => {
  return {
    type: UPDATE_DEAD_ENEMY_COUNTER,
    counter,
    enemy
  };
};
