import * as React from 'react';
import ViewScreen from './components/ViewScreen';
import WarpIndicator from './components/WarpIndicator';
import Information from './components/Information';
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

    // start simulator at quater impulse speed
    const targetWarpSpeed = WarpSpeeds.slice(-2)[0];
    this.state = {
      targetWarpSpeed,
      currentWarpSpeedVelocity: targetWarpSpeed.velocity,
    };

    this.setTargetWarpSpeed = this.setTargetWarpSpeed.bind(this);
    this.setCurrentWarpSpeedVelocity = this.setCurrentWarpSpeedVelocity.bind(this);
  }

  setTargetWarpSpeed(warpSpeed: IWarpSpeed) {
    this.setState({ targetWarpSpeed: warpSpeed });
  }

  setCurrentWarpSpeedVelocity(velocity: number) {
    this.setState({
      currentWarpSpeedVelocity: velocity,
    });
  }

  render() {
    return (
      <div className="simulator">
        <ViewScreen
          targetWarpSpeed={this.state.targetWarpSpeed}
          currentWarpSpeedVelocity={this.state.currentWarpSpeedVelocity}
          setCurrentWarpSpeedVelocity={this.setCurrentWarpSpeedVelocity}
        />

        <WarpIndicator
          targetWarpSpeed={this.state.targetWarpSpeed}
          currentWarpSpeedVelocity={this.state.currentWarpSpeedVelocity}
          setTargetWarpSpeed={this.setTargetWarpSpeed}
        />

        <div className="destination">
          <Panel title="Destination" />
        </div>

        <div className="communications">
          <Panel title="Communications" />
        </div>

        <Information />
      </div>
    );
  }
}
