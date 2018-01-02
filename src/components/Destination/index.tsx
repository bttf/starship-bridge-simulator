import * as React from 'react';
import Panel from 'components/Panel';
import Dropdown from 'components/Dropdown';
import './styles.scss';

export default class Destination extends React.PureComponent {
  render() {
    return (
      <div className="destination">
        <Panel title="Destination">
          <Dropdown labelKey="test" />
        </Panel>
      </div>
    );
  }
}
