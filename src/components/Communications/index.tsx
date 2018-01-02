import * as React from 'react';
import Panel from 'components/Panel';
import './styles.scss';

export default class Destination extends React.PureComponent {
  render() {
    return (
      <div className="communications">
        <Panel title="Communications" />
      </div>
    );
  }
}
