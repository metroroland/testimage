import { CHANGE_ENEMY, UPDATE_EXPERIENCE, ATTACK_PLAYER } from "./types";
import { EntityObject } from "../basicTypes";

export function changeEnemy(newEnemy: EntityObject) {
  return {
    type: CHANGE_ENEMY,
    newEnemy
  };
}

export function updateExperience(experience: number) {
  return {
    type: UPDATE_EXPERIENCE,
    experience
  };
}

export function attackFromPlayer(attack: number, level: number) {
  return {
    type: ATTACK_PLAYER,
    attack,
    level
  };
}
