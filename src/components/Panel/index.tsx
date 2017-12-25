import * as React from 'react';
import './styles.scss';

export default class Panel extends React.PureComponent {
  refs: {
    [key: string]: (Element);
    veilTop: (HTMLDivElement);
    veilRight: (HTMLDivElement);
    veilBottom: (HTMLDivElement);
    veilLeft: (HTMLDivElement);
  };

  componentDidMount() {
    setTimeout(() => {
      const veilTop = this.refs.veilTop;
      const veilRight = this.refs.veilRight;
      const veilBottom = this.refs.veilBottom;
      const veilLeft = this.refs.veilLeft;

      veilTop.className = veilTop.className.concat(' hidden');
      veilLeft.className = veilLeft.className.concat(' hidden');

      setTimeout(() => {
        veilRight.className = veilRight.className.concat(' hidden');
        veilBottom.className = veilBottom.className.concat(' hidden');
      }, 250);
    }, 50);
  }

  render() {
    return (
      <div className="panel">
        <div className="veil veil-top" ref="veilTop"></div>
        <div className="veil veil-right" ref="veilRight"></div>
        <div className="veil veil-bottom" ref="veilBottom"></div>
        <div className="veil veil-left" ref="veilLeft"></div>
      </div>
    );
  }
}
