import * as React from 'react';
import './styles.scss';

export interface PanelProps {
  title?: string;
}

export interface PanelState {
  showContent: boolean;
}

export default class Panel extends React.PureComponent<PanelProps, PanelState> {
  refs: {
    [key: string]: (Element);
    veilTop: (HTMLDivElement);
    veilRight: (HTMLDivElement);
    veilBottom: (HTMLDivElement);
    veilLeft: (HTMLDivElement);
    title: (HTMLDivElement);
    container: (HTMLDivElement);
  };

  constructor(props: PanelProps) {
    super(props);

    this.state = {
      showContent: false,
    };
  }

  componentDidMount() {
    /**
     * calculate unveilTimeout based on x-y position; panels appear successively
     * from left to right
     */
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
     * insert content div into DOM after unveiling and make title and content
     * visible after delay
     */
    setTimeout(() => {
      this.setState({ showContent: true });

      const title = this.refs.title;
      const content = this.refs.content;

      title.className = title.className.concat(' visible');
      content.className = content.className.concat(' visible');
    }, unveilTimeout + 550);
  }

  render() {
    const titleElement = <div className="title" ref="title">{this.props.title}</div>;

    return (
      <div className="panel-container" ref="container">
        <div className="panel">
          {this.state.showContent ? (<div className="content" ref="content" {...this.props}></div>) : null}
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
