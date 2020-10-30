import * as React from "react";
import _ from "lodash";
import Card from "./Card";

import "./css/BattleBlock.css";

import swordType from "../assets/img/UI/CardTypes/swordType.png";
import shieldType from "../assets/img/UI/CardTypes/shieldType.png";
import heartType from "../assets/img/UI/CardTypes/heartType.png";
import { EnemiesArray } from "../Store/Enemies/db";

interface originProps {
  name: string;
  isFirst: boolean;
}
interface originState {
  name: string;
  isFirst: boolean;
  enemies: typeof EnemiesArray;
}

export default class BattleBlock extends React.Component<
  originProps,
  originState
> {
  getRandomEnemies = (): typeof EnemiesArray => {
    const tempArr = [];
    for (let i = 0; i < 3; i++) {
      const index = _.random(0, EnemiesArray.length - 1);
      tempArr.push(EnemiesArray[index]);
    }
    return tempArr;
  };

  state = {
    name: this.props.name,
    isFirst: this.props.isFirst,
    enemies: this.getRandomEnemies()
  };

  render() {
    const entityTagName = this.state.isFirst ? "TagEnemy" : "TagPlayer";
    const Enemies = this.state.enemies;
    return (
      <div className={"BattleBlock"}>
        <div className={"BattleBlockName " + entityTagName}>
          {this.state.name}
        </div>
        <div className="BattleCardList">
          <Card
            name={Enemies[0].name}
            imageCard={Enemies[0].image}
            imageType={swordType}
            altType="Attacker"
          />
          <Card
            name={Enemies[1].name}
            imageCard={Enemies[1].image}
            imageType={shieldType}
            altType="Protector"
          />
          <Card
            name={Enemies[2].name}
            imageCard={Enemies[2].image}
            imageType={heartType}
            altType="Healer"
          />
        </div>
      </div>
    );
  }
}
