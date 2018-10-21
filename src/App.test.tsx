import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppStore from "./stores/App.store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={new AppStore()}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
