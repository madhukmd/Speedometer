import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decrease = () => {
    const {speed} = this.state
    if (speed >= 10) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="subHeading">Speed is {speed}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="btn" onClick={this.increase}>
            Accelerate
          </button>
          <button type="button" className="btn brake" onClick={this.decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
