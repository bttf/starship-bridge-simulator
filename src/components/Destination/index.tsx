import * as React from 'react';
import Panel from '../Panel';
import './styles.scss';

export default class Destination extends React.PureComponent {
  render() {
    return (
      <div className="destination">
        <Panel title="Destination" />
      </div>
    );
  }
}