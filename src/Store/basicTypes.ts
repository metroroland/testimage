export interface EntityObject {
  name: string;
  typeEntity: string;
  image: string;
  level: number;
  attack: number;
  hp: number;
  mp: number;
  maxHp: number;
  maxMp: number;
  currentExp: number;
  maxExp: number;
  skills?: passiveSkills;
}

export type Bag = Array<BagItem>;

export interface BagItem {
  name: string;
  effect: string;
  fieldInEntityObject: string;
  counter: number;
}

export interface Skill {
  image: string;
  skillTypeClass: string;
  skillType: string;
  skillName: string;
  skillInfo: string;
  skillsValue: number;
}

export type passiveSkills = Array<Skill>;
