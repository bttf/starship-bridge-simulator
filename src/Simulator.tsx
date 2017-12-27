import * as React from 'react';
import ViewScreen from './components/ViewScreen';
import WarpIndicator from './components/WarpIndicator';
import Panel from './components/Panel';
import WarpSpeeds, { IWarpSpeed } from 'starbridge/lib/WarpSpeeds';
import './Simulator.scss';

interface SimulatorState {
  targetWarpSpeed: IWarpSpeed;
  currentWarpSpeedVelocity: number;
}

export default class Simulator extends React.PureComponent<{}, SimulatorState> {
  constructor(props: {}) {
    super(props);

    // get 2nd to last speed (quarter impulse)
    const targetWarpSpeed = WarpSpeeds.slice(-2)[0];

    this.state = {
      targetWarpSpeed,
      currentWarpSpeedVelocity: targetWarpSpeed.velocity,
    };

    this.setCurrentWarpSpeedVelocity = this.setCurrentWarpSpeedVelocity.bind(this);
    this.setTargetWarpSpeed = this.setTargetWarpSpeed.bind(this);
  }

  setCurrentWarpSpeedVelocity(velocity: number) {
    this.setState({
      currentWarpSpeedVelocity: velocity,
    });
  }

  setTargetWarpSpeed(warpSpeed: IWarpSpeed) {
    this.setState({ targetWarpSpeed: warpSpeed });
  }

  render() {
    return (
      <div className="top-row">
        <div className="title">
          Starbridge Simulator v1
        </div>

        <ViewScreen
          currentWarpSpeedVelocity={this.state.currentWarpSpeedVelocity}
          targetWarpSpeed={this.state.targetWarpSpeed}
          setCurrentWarpSpeedVelocity={this.setCurrentWarpSpeedVelocity}
        />

        <WarpIndicator
          targetWarpSpeed={this.state.targetWarpSpeed}
          currentWarpSpeedVelocity={this.state.currentWarpSpeedVelocity}
          setTargetWarpSpeed={this.setTargetWarpSpeed}
        />

        <div className="destination-and-comms">
          <div className="destination">
            <Panel title="Destination" />
          </div>
          <div className="communications">
            <Panel title="Communications" />
          </div>
        </div>
      </div>
    );
  }
}
