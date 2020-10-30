import * as React from "react";
import { connect } from "react-redux";
// import GameCard from "../GameCard/GameCard";
import BattleBlock from "../BasicComponents/BattleBlock";
// import { EntityObject, passiveSkills } from "../Store/basicTypes";
// import { EnemiesState } from "../Store/Enemies/types";
// import { PlayerState } from "../Store/Player/types";
import { AppState } from "../Store/index";
import { attackFromPlayer } from "../Store/Enemies/actions";
import { updateEnemyDeadCounter, attackPlayer } from "../Store/Player/actions";

import "./styles.css";

interface originProps {
  device: string;
  isBookOpen: boolean;
  playerName: string;
  playerSoul: string;
}

interface originState {
  device: string;
  isBookOpen: boolean;
  playerName: string;
  playerSoul: string;
}

class BattleTableTemplate extends React.Component<originProps, originState> {
  static getDerivedStateFromProps(props, state) {
    if (state.isBookOpen !== props.isBookOpen) {
      return {
        isBookOpen: props.isBookOpen,
        device: props.device
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      device: props.device,
      isBookOpen: props.isBookOpen,
      playerName: props.playerName,
      playerSoul: props.playerSoul
    };
  }

  render() {
    return (
      <div className="BattleField">
        <BattleBlock isFirst={true} name="Enemy" />
        <div className="VersusTitle">VS</div>
        <BattleBlock isFirst={false} name={this.state.playerName} />
        <div className="BookInfo" style={this.bookStyle()} />
      </div>
    );
  }

  bookStyle = () => {
    return this.state.isBookOpen
      ? {
          display: "block",
          width: `85%`
        }
      : null;
  };
}

const mapStateToProps = (state: AppState) => {
  return {
    enemy: state.Enemies.currentEnemy,
    player: state.Player.player,
    playerSkill: state.Player.Skills
  };
};

export default connect(
  mapStateToProps,
  {
    attackFromPlayer,
    attackPlayer,
    updateEnemyDeadCounter
  }
)(BattleTableTemplate);
