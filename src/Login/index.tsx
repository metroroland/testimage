import * as React from "react";
import "./styles.css";

interface loginProps {
  setLogin: Function;
  backgroundImage: string;
}

class Login extends React.Component<loginProps> {
  state = {
    nickName: "",
    selectedValue: "Chaos"
  };

  render() {
    const setLogin = this.props.setLogin;
    return (
      <div
        className="LoginTemplate"
        style={{ background: `url(${this.props.backgroundImage})` }}
      >
        <div className="LoginWindow">
          <h2>Contract for selling Soul</h2>
          <div className="LoginInputs">
            <div className="InputBlock">
              <span>Name:</span>
              <span>
                <input
                  type="text"
                  onChange={({ currentTarget }) => {
                    this.setState({ nickName: currentTarget.value });
                  }}
                />
              </span>
            </div>
            <div className="InputBlock">
              <span>Soul type:</span>
              <span>
                <select
                  size={1}
                  name="hero"
                  onSelect={e => {
                    this.setState({ selectedValue: e.currentTarget.value });
                  }}
                >
                  <option value="Chaos" defaultValue={"selected"}>
                    Chaos
                  </option>
                  <option value="Good">Good</option>
                  <option value="Evil">Evil</option>
                </select>
              </span>
            </div>
            <div className="InputBlock">
              <button
                onClick={() =>
                  setLogin(this.state.nickName, this.state.selectedValue)
                }
              >
                Sell Soul
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
