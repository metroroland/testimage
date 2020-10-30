import * as React from "react";
import "./styles.css";

import pauseBtn from "../assets/img/UI/pause-button.png";
import playBtn from "../assets/img/UI/play-button.png";
import heroicSound from "../assets/sound/heroic.mp3";

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0.5,
      music: [],
      musicTime: "0:00 / 0:00"
    };
  }

  soundsLoader = arr => {
    const tempMusic = [];
    arr.forEach(link => {
      const audio = new Audio(link);
      audio.load();
      audio.volume = 0.2;
      tempMusic.push(audio);
    });
    this.setState({
      music: tempMusic
    });
  };

  componentDidMount() {
    this.soundsLoader([heroicSound]);
  }

  render() {
    return (
      <div className="MusicPlayer">
        <div className="MusicPlayerTitle">MusicPlayer</div>
        <div className="MusicTime">{this.state.musicTime}</div>
        <div className="MusicPlayerButtons">
          <span onClick={this.onPause}>
            <img src={pauseBtn} alt="" />
          </span>
          <span onClick={this.onPlay}>
            <img src={playBtn} alt="" />
          </span>
        </div>
      </div>
    );
  }

  fmtMSS = s => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  };

  onPlay = () => {
    this.state.music[0].play();
    this.state.music[0].ontimeupdate = () => {
      let duration = this.fmtMSS(Math.floor(this.state.music[0].duration));
      let currentTime = this.fmtMSS(
        Math.floor(this.state.music[0].currentTime)
      );
      this.setState({ musicTime: currentTime + " / " + duration });
    };
  };
  onPause = () => {
    this.state.music[0].pause();
  };
}
