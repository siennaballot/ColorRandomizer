
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorChanger from './components/ColorChanger'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <ColorChanger />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
