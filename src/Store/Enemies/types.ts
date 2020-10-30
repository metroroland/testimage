import { EntityObject } from "../basicTypes";
import { updateEnemyDeadCounter } from "../Player/actions";

export interface EnemiesState {
  enemiesDB: Array<EntityObject>;
  currentEnemy: EntityObject;
}

export const CHANGE_ENEMY = "CHANGE_ENEMY";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const ATTACK_PLAYER = "ATTACK_PLAYER";

interface ChangeEnemyAction {
  type: typeof CHANGE_ENEMY;
  newEnemy: EntityObject;
}

interface UpdateExperienceAction {
  type: typeof UPDATE_EXPERIENCE;
  experience: number;
}

interface AttackPlayerAction {
  type: typeof ATTACK_PLAYER;
  attack: number;
  level: number;
}

export type EnemiesActionTypes =
  | ChangeEnemyAction
  | UpdateExperienceAction
  | AttackPlayerAction;
