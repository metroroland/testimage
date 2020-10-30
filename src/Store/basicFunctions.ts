import { EntityObject } from "./basicTypes";
import _ from "lodash";

export function increaseExperience(
  gameEntity: EntityObject,
  experience: number
) {
  if (gameEntity) {
    if (gameEntity.currentExp + experience >= gameEntity.maxExp) {
      let newExp = gameEntity.currentExp + experience;
      while (newExp >= gameEntity.maxExp) {
        gameEntity.currentExp = newExp - gameEntity.maxExp;
        newExp = gameEntity.currentExp;
        gameEntity.maxExp += getRandomPersent(gameEntity.maxExp);
        increaseAttributes(gameEntity);
      }
    } else {
      gameEntity.currentExp += experience;
    }
  }
}

export function increaseExperienceByDeadEnemy(
  enemies: Array<EntityObject>,
  gameEntity: EntityObject,
  experience: number
) {
  enemies.map(enemy => {
    if (enemy.name === gameEntity.name) {
      // levelUP + inscrease attributes
      increaseExperience(enemy, experience);
    }
    return enemy;
  });
}

export function getAttack(attack: number, toEntity: EntityObject): boolean {
  // is Dead?
  if (toEntity.hp - attack <= 0) {
    return true;
  } else {
    toEntity.hp -= attack;
    return false;
  }
}

export const setNewEntity = (
  Entites: Array<EntityObject>,
  maxLevel: number
): EntityObject => {
  const newEntites = Entites.filter(e => e.typeEntity === "TypeMob");
  return newEntites[_.random(newEntites.length - 1)];
};

export const increaseAttributes = (gameEntity: EntityObject) => {
  gameEntity.level++;
  // add 25% from MaxValue
  gameEntity.maxHp += getRandomPersent(gameEntity.maxHp);
  gameEntity.hp = gameEntity.maxHp;
  gameEntity.maxMp += get20persent(gameEntity.maxMp);
  gameEntity.mp = gameEntity.maxMp;
  gameEntity.attack += getRandomPersent(gameEntity.attack);
};

const getRandomPersent = (value: number) => {
  const pers = _.random(20, 30);
  return Math.round((value * pers) / 100);
};
const get23persent = (value: number = 10): number =>
  Math.round((value * 23) / 100);
const get25persent = (value: number = 10): number =>
  Math.round((value * 25) / 100);
const get20persent = (value: number = 10): number =>
  Math.round((value * 20) / 100);

export const formatIntoGameValue = (value: number) => {
  const strValue = String(value);
  const strLength = strValue.length;
  switch (strLength) {
    case 4:
      return strValue[0] + "K";
    case 5:
      return strValue.slice(0, 2) + "K";
    case 6:
      return strValue.slice(0, 3) + "K";
    case 7:
      return strValue[0] + "М";
    case 8:
      return strValue.slice(0, 2) + "М";
    case 9:
      return strValue.slice(0, 3) + "М";
    case 10:
      return strValue[0] + "B";
    case 11:
      return strValue.slice(0, 2) + "B";
    case 12:
      return strValue.slice(0, 3) + "B";
    default:
      return value;
  }
};
