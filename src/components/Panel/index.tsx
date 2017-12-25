import * as React from 'react';
import './styles.scss';

export interface PanelProps {
  title?: string;
}

export default class Panel extends React.PureComponent<PanelProps, {}> {
  refs: {
    [key: string]: (Element);
    veilTop: (HTMLDivElement);
    veilRight: (HTMLDivElement);
    veilBottom: (HTMLDivElement);
    veilLeft: (HTMLDivElement);
    title: (HTMLDivElement);
    container: (HTMLDivElement);
  };

  componentDidMount() {
    const panelOffsetLeft = this.refs.container.offsetLeft;
    const fullWidthRatio = panelOffsetLeft / window.innerWidth;
    const maxTimeout = 500;
    const unveilTimeout = maxTimeout * fullWidthRatio;

    /**
     * add classnames to veil elements after slight delay
     */
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
    }, unveilTimeout);

    /**
     * add classname to title element after slight delay
     */
    setTimeout(() => {
      const title = this.refs.title;
      title.className = title.className.concat(' visible');
    }, unveilTimeout + 550);
  }

  render() {
    const titleElement = <div className="title-element" ref="title">{this.props.title}</div>;

    return (
      <div className="panel-container" ref="container">
        <div className="panel">
          <div className="veil veil-top" ref="veilTop"></div>
          <div className="veil veil-right" ref="veilRight"></div>
          <div className="veil veil-bottom" ref="veilBottom"></div>
          <div className="veil veil-left" ref="veilLeft"></div>
        </div>

        {this.props.title ? titleElement : null}
      </div>
    );
  }
}
