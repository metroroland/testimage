import playerImg from "../../assets/img/player.jpg";
import { EntityObject } from "../basicTypes";

export const PlayerData: EntityObject = {
  name: "Player",
  typeEntity: "TypePlayer",
  image: playerImg,
  level: 1,
  attack: 11,
  hp: 21,
  maxHp: 21,
  mp: 3,
  maxMp: 3,
  currentExp: 0,
  maxExp: 18
};
