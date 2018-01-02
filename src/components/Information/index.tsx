import * as React from 'react';
import Panel from 'components/Panel';
import './styles.scss';

export default class Information extends React.PureComponent {
  render() {
    return (
        <div className="information">
          <Panel title="Information" />
        </div>
    );
  }
}
