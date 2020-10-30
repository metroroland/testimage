import { EntityObject, Bag, passiveSkills } from "../basicTypes";

export interface PlayerState {
  player: EntityObject;
  Skills: passiveSkills;
  Bag: Bag;
  enemyDeadCounter: number;
}

export const GET_ATTACK = "GET_ATTACK";
export const UPDATE_DEAD_ENEMY_COUNTER = "UPDATE_DEAD_ENEMY_COUNTER";

interface GetAttak {
  type: typeof GET_ATTACK;
  attack: number;
}

interface UpdateDeadEnemyCounter {
  type: typeof UPDATE_DEAD_ENEMY_COUNTER;
  counter: number;
  enemy: EntityObject;
}

export type PlayerActionTypes = UpdateExperienceAction | UpdateDeadEnemyCounter;
