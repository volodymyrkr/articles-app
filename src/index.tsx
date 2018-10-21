import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppStore from "./stores/App.store";

const appStore = new AppStore();

ReactDOM.render(
    <App store={appStore}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
