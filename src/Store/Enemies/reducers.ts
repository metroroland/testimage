import produce, { Draft } from "immer";
import {
  EnemiesState,
  EnemiesActionTypes,
  CHANGE_ENEMY,
  UPDATE_EXPERIENCE,
  ATTACK_PLAYER
} from "./types";
import {
  increaseExperience,
  increaseExperienceByDeadEnemy,
  getAttack,
  setNewEntity
} from "../basicFunctions";
import { EnemiesArray } from "./db";

const initialState: EnemiesState = {
  enemiesDB: EnemiesArray,
  currentEnemy: EnemiesArray[0]
};

export const EnemiesReducer = produce(
  (draftState: Draft<EnemiesState>, action: EnemiesActionTypes) => {
    switch (action.type) {
      case CHANGE_ENEMY:
        draftState.currentEnemy = action.newEnemy;
        return;
      case UPDATE_EXPERIENCE:
        const { experience } = action;
        increaseExperience(draftState.currentEnemy, experience);
        return;
      case ATTACK_PLAYER:
        const { attack, level } = action;
        let currentEntity = draftState.currentEnemy;
        const isChange = getAttack(attack, currentEntity);
        if (isChange) {
          increaseExperienceByDeadEnemy(
            draftState.enemiesDB,
            draftState.currentEnemy,
            attack
          );
          draftState.currentEnemy = setNewEntity(draftState.enemiesDB, level);
        }
        return;
    }
  },
  initialState
);
