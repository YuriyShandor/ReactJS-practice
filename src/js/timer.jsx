import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    let textValSecond = 'секунд';
    let textValPast = 'минуло';
    if (this.state.seconds == 1 || this.state.seconds % 10 == 1 && this.state.seconds != 11 && this.state.seconds % 100 != 11) {
      textValSecond = 'секунда';
      textValPast = 'минула';
    } else if (this.state.seconds % 10 == 2 && this.state.seconds != 12 && this.state.seconds % 100 != 12
      || this.state.seconds % 10 == 3 && this.state.seconds != 13 && this.state.seconds % 100 != 13
      || this.state.seconds % 10 == 4 && this.state.seconds != 14 && this.state.seconds % 100 != 14) {
      textValSecond = 'секунди';
    };
    return (
      <section>
        <div className="container">
          <div className="timer">
            <h2>Від початку завантаження сторінки {textValPast} <span>{this.state.seconds}</span> {textValSecond}</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Timer;
