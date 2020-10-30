import * as React from "react";
import "./css/Card.css";

interface originProps {
  imageType: string;
  imageCard: string;
  altType: string;
  name: string;
}

export default class Card extends React.Component<originProps> {
  render() {
    const props = this.props;
    return (
      <div className="Card">
        <div className="CardName">{props.name}</div>
        <div className="CardPhoto">
          <img src={props.imageCard} alt="" />
        </div>
        <div className="CardType">
          <img
            src={props.imageType}
            alt={props.altType}
            title={props.altType}
          />
        </div>
      </div>
    );
  }
}
