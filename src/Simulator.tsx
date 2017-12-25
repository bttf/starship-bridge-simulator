import * as React from 'react';
import Panel from './components/Panel';
import './Simulator.scss';

export default class Simulator extends React.Component {
  render() {
    return (
      <div className="top-row">
        <div className="viewscreen">
          <Panel />
        </div>
        <div className="warp-indicator">
          <Panel />
        </div>
        <div className="destination-and-comms">
          <div className="destination">
            <Panel />
          </div>
          <div className="communications">
            <Panel />
          </div>
        </div>
      </div>
    );
  }
}
