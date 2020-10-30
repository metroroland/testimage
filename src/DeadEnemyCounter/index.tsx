import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../Store";

interface originProps {
  DeadCounter: number;
}
interface originState {
  DeadCounter: number;
}

class DeadEnemyCounterTempale extends React.Component<
  originProps,
  originState
> {
  state = { DeadCounter: this.props.DeadCounter };
  static getDerivedStateFromProps(props, state) {
    if (state.DeadCounter !== props.DeadCounter)
      return {
        DeadCounter: props.DeadCounter
      };
    return null;
  }
  render() {
    return (
      <span className="KilledCounter">
        Evil Souls: {this.props.DeadCounter}
      </span>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    DeadCounter: state.Player.enemyDeadCounter
  };
};

const DeadEnemyCounter = connect(
  mapStateToProps,
  null
)(DeadEnemyCounterTempale);

export default DeadEnemyCounter;
