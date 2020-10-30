//export const PassiveSkills: Array<object> = [];

import swordIcon from "../assets/img/UI/sword.png";
import slyIcon from "../assets/img/UI/sly.png";
// import robeIcon from "../assets/img/UI/robe.png";
import shieldIcon from "../assets/img/UI/shield.png";
import destinyIcon from "../assets/img/UI/destiny.png";
import octomanIcon from "../assets/img/UI/octoman.png";
import suspiciousIcon from "../assets/img/UI/suspicious.png";

export const Skills = {
  passive: {
    BlassedByAbuss: {
      image: slyIcon,
      skillTypeClass: "SkillPassive",
      skillType: "void",
      skillName: "Blessed By Abyss",
      skillInfo: "You get attack from enemy after your attack",
      skillsValue: 0
    },
    PureProtection: {
      image: shieldIcon,
      skillTypeClass: "SkillPassive",
      skillType: "protection",
      skillName: "Pure protection",
      skillInfo: "Chance of protection 0.1%",
      skillsValue: 0.1
    },
    SmallSword: {
      image: swordIcon,
      skillTypeClass: "SkillPassive",
      skillType: "attack",
      skillName: "Small Sword",
      skillInfo: "Chance of crit attk. 0.1%",
      skillsValue: 0.1
    },
    CruelPower: {
      image: destinyIcon,
      skillTypeClass: "SkillPassive",
      skillType: "chaos",
      skillName: "Cruel Power",
      skillInfo: "After Enemy Death stole 25% of there power",
      skillsValue: 25
    },
    HardAura: {
      image: octomanIcon,
      skillTypeClass: "SkillPassive",
      skillType: "void",
      skillName: "Hard Aura",
      skillInfo: "Health increase x8",
      skillsValue: 8
    },
    BlessedBlood: {
      image: suspiciousIcon,
      skillTypeClass: "SkillPassive",
      skillType: "chaos",
      skillName: "Blessed Blood",
      skillInfo: "Health increase x8",
      skillsValue: 8
    },
    king9: {
      SpiritKing: {
        image: octomanIcon,
        skillTypeClass: "SkillPassive",
        skillType: "chaos",
        skillName: "Spirit King",
        skillInfo: "Hard to stay near this creature",
        skillsValue: 0
      },
      CruelKing: {
        image: destinyIcon,
        skillTypeClass: "SkillPassive",
        skillType: "chaos",
        skillName: "Cruel King",
        skillInfo: "The King of the 9 Circle",
        skillsValue: 0
      },
      BlassedBySatan: {
        image: slyIcon,
        skillTypeClass: "SkillPassive",
        skillType: "void",
        skillName: "Blessed By Satan",
        skillInfo: "The Satan child",
        skillsValue: 0
      }
    }
  },
  active: {}
};

export const SkillsArray = [];
