import { EntityObject } from "../basicTypes";
import { Skills } from "../basicData";

import enemy1 from "../../assets/img/Enemy/trigon.jpg";
import enemy2 from "../../assets/img/Enemy/soulEater.jpg";
import enemy3 from "../../assets/img/Enemy/incube.jpg";
import enemy4 from "../../assets/img/Enemy/deadSoul.jpg";
import enemy5 from "../../assets/img/Enemy/bes.jpg";
import enemy6 from "../../assets/img/Enemy/EvilMage.jpg";
import enemy7 from "../../assets/img/Enemy/soulsHunter.jpg";
import enemy8 from "../../assets/img/Enemy/CrusedPrincess.jpg";
import king9 from "../../assets/img/Enemy/king9Circle.jpg";

export const EnemiesArray: Array<EntityObject> = [
  {
    name: "Trigon",
    typeEntity: "TypeMob",
    image: enemy1,
    level: 1,
    attack: 3,
    hp: 4,
    maxHp: 4,
    mp: 1,
    maxMp: 1,
    currentExp: 0,
    maxExp: 12
  },
  {
    name: "Soul Eater",
    typeEntity: "TypeMob",
    image: enemy2,
    level: 1,
    attack: 6,
    hp: 9,
    maxHp: 9,
    mp: 8,
    maxMp: 8,
    currentExp: 0,
    maxExp: 12
  },
  {
    name: "Incube",
    typeEntity: "TypeMob",
    image: enemy3,
    level: 1,
    attack: 14,
    hp: 11,
    maxHp: 11,
    mp: 3,
    maxMp: 3,
    currentExp: 0,
    maxExp: 15
  },
  {
    name: "Dead Souls",
    typeEntity: "TypeMob",
    image: enemy4,
    level: 1,
    attack: 8,
    hp: 12,
    maxHp: 12,
    mp: 1,
    maxMp: 1,
    currentExp: 0,
    maxExp: 22
  },
  {
    name: "Small Demon",
    typeEntity: "TypeMob",
    image: enemy5,
    level: 1,
    attack: 11,
    hp: 16,
    maxHp: 16,
    mp: 3,
    maxMp: 3,
    currentExp: 0,
    maxExp: 24
  },
  {
    name: "Evil Assasin",
    typeEntity: "TypeMob",
    image: enemy6,
    level: 1,
    attack: 30,
    hp: 26,
    maxHp: 26,
    mp: 3,
    maxMp: 3,
    currentExp: 0,
    maxExp: 36
  },
  {
    name: "Souls Hunter",
    typeEntity: "TypeMob",
    image: enemy7,
    level: 2,
    attack: 23,
    hp: 40,
    maxHp: 40,
    mp: 3,
    maxMp: 3,
    currentExp: 0,
    maxExp: 40
  },
  {
    name: "Cursed Princess",
    typeEntity: "TypeMob",
    image: enemy8,
    level: 4,
    attack: 27,
    hp: 32,
    maxHp: 32,
    mp: 32,
    maxMp: 32,
    currentExp: 0,
    maxExp: 32
  },
  {
    // king9Circle
    name: "King of C9",
    typeEntity: "TypeBoss",
    image: king9,
    level: 9999,
    attack: 6666666,
    hp: 6666666,
    maxHp: 6666666,
    mp: 6666666,
    maxMp: 666666,
    currentExp: 0,
    maxExp: 666666666,
    skills: [
      Skills.passive.king9.SpiritKing,
      Skills.passive.king9.CruelKing,
      Skills.passive.king9.BlassedBySatan
    ]
  }
];
