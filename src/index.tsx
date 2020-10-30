import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./Store";

import Login from "./Login";
import DeadEnemyCounter from "./DeadEnemyCounter";
import BattleTable from "./BattleTable";

import "./styles.css";

import backgroundImg from "./assets/img/texture/lava.jpg";
import closeBookIcon from "./assets/img/UI/Book/disabledBook.png";
import openBookIcon from "./assets/img/UI/Book/activeBook.png";

const Store = store();

interface originProps {}
interface originState {
  isBookOpen: boolean;
  isLogin: boolean;
  playerName: string;
  soulType: string;
}

class App extends React.Component<originProps, originState> {
  constructor(props) {
    super(props);
    const name = this.getCookie("name");
    const soul = this.getCookie("soul");
    if (name && soul) {
      this.state = {
        isBookOpen: false,
        isLogin: true,
        playerName: name,
        soulType: soul
      };
    } else {
      this.state = {
        isBookOpen: false,
        isLogin: false,
        playerName: "",
        soulType: ""
      };
    }
  }

  whatDevice = (width: number = 0) => {
    if (width >= 992) return "Desktops";
    if (width >= 768) return "Tablets";
    if (width >= 320 || width >= 480) return "Phone";
  };

  activeBookInfo = () => {
    this.setState(prevState => ({
      isBookOpen: !prevState.isBookOpen
    }));
  };

  getCookie = name => {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  setLogin = (name: string, soulType: string) => {
    if (name && soulType) {
      document.cookie = `name=${name};`;
      document.cookie = `soul=${soulType}`;
      this.setState({
        isLogin: true,
        playerName: name,
        soulType: soulType
      });
    }
  };
  template = () => {
    return !this.state.isLogin ? (
      <Login setLogin={this.setLogin} backgroundImage={backgroundImg} />
    ) : (
      <div>
        <div className="HeaderTitle">
          <span>Welcome to Hell</span>
          <DeadEnemyCounter />
          <div className="BookIcon" onClick={this.activeBookInfo}>
            {this.state.isBookOpen ? (
              <img src={openBookIcon} alt="" />
            ) : (
              <img src={closeBookIcon} alt="" />
            )}
          </div>
        </div>
        <BattleTable
          device={this.whatDevice(document.defaultView.innerWidth)}
          isBookOpen={this.state.isBookOpen}
          playerName={this.state.playerName}
          playerSoul={this.state.soulType}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
        {this.template()}
      </div>
    );
  }
}

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
