import * as React from 'react';
import Panel from './components/Panel';
import './Simulator.scss';

export default class Simulator extends React.Component {
  render() {
    return (
      <div className="top-row">
        <div className="title">
          Starbridge Simulator v1
        </div>
        <div className="viewscreen">
          <Panel title="ViewScreen" />
        </div>
        <div className="warp-indicator">
          <Panel title="Warp Indicator" />
        </div>
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
