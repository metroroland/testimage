import * as React from "react";
import { EntityObject, passiveSkills } from "../Store/basicTypes";
import { formatIntoGameValue } from "../Store/basicFunctions";
import _ from "lodash";

import "./styles.css";

interface originCardProps {
  clickFunction?: Function;
  isProgressBar?: boolean;
  gameObject: EntityObject;
  skills?: passiveSkills;
}

const UIBasicBar = ({ classBar, currentClassBar, width, data }) => {
  return (
    <div className={"BasicBar " + classBar}>
      <div className="BasicBarTitle">{data}</div>
      <div className={currentClassBar} style={{ width: `${width}px` }} />
    </div>
  );
};

const UISkillBlock = ({ skill }) => {
  const { image, skillTypeClass, skillType, skillInfo, skillName } = skill;
  return (
    <div
      className={"SkillBlock " + skill.skillTypeClass}
      key={_.random(0, 111)}
    >
      <span className="SkillImage">
        <img src={image} alt="" />
      </span>
      <span className="SkillInfo">
        <div className="SkillName">{skillName}</div>
        {skillInfo}
        {skillTypeClass === "SkillPassive" ? "<passive>" : "<active>"}
      </span>
    </div>
  );
};

class GameCard extends React.Component<originCardProps> {
  render() {
    const { gameObject, clickFunction } = this.props;
    const skills =
      (this.props.skills && this.props.skills) ||
      (gameObject.skills && gameObject.skills);
    const barExperienceWidth =
      (gameObject.currentExp * 300) / gameObject.maxExp;
    const barHpWidth = (gameObject.hp * 300) / gameObject.maxHp;
    const barManaWidth = (gameObject.mp * 300) / gameObject.maxMp;
    return (
      <div
        className={"GameCard " + gameObject.typeEntity}
        onClick={clickFunction}
        key={Math.random()}
      >
        <div className={"CardTitle " + gameObject.typeEntity}>
          <span className="CardName">{gameObject.name}</span>
          <span className="CardLevel">{"lvl: " + gameObject.level}</span>
        </div>
        <div style={{ position: "relative" }}>
          <img className="CardEntity" alt="" src={gameObject.image} />
          <div className="CardAttackScore">
            {" "}
            Attack: {formatIntoGameValue(gameObject.attack)}
          </div>
        </div>
        <UIBasicBar
          classBar="HealthBar"
          currentClassBar="HealthBarCurrent"
          width={barHpWidth}
          data={`HP: ${formatIntoGameValue(
            gameObject.hp
          )} / ${formatIntoGameValue(gameObject.maxHp)}`}
        />
        <UIBasicBar
          classBar="ManaBar"
          currentClassBar="ManaBarCurrent"
          width={barManaWidth}
          data={`MP: ${formatIntoGameValue(
            gameObject.mp
          )} / ${formatIntoGameValue(gameObject.maxMp)}`}
        />
        <UIBasicBar
          classBar="ExperienceBar"
          currentClassBar="ExperienceBarCurrent"
          width={barExperienceWidth}
          data={`Exp: ${formatIntoGameValue(
            gameObject.currentExp
          )} / ${formatIntoGameValue(gameObject.maxExp)}`}
        />
        <div className={"CardSkills " + gameObject.typeEntity}>
          {skills
            ? skills.map(skill => (
                <UISkillBlock skill={skill} key={_.random(1, 222)} />
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default GameCard;
