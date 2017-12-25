import * as React from 'react';
import './styles.scss';

export interface PanelProps {
  flexValue?: number;
}

export interface PanelState {
  width?: number;
  height?: number;
  flexValue?: number;
}

export default class Panel extends React.PureComponent<PanelProps, PanelState>  {
  constructor(props: PanelProps) {
    super(props);

    this.state = {
      width: 900,
      height: 600,
      flexValue: props.flexValue,
    };
  }

  render() {
    return (
      <div className="panel">
      </div>
    );
  }
}
