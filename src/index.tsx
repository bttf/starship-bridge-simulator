import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Simulator from './Simulator';
import './index.scss';

/**
 * Screen-blocking loading indicator removed on 'onload' event
 */
window.onload = () => {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator && loadingIndicator.remove();
};

ReactDOM.render(
  <Simulator />,
  document.getElementById('root')
);
