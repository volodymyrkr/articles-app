import * as React from 'react';
import './App.css';

import { observer } from 'mobx-react';
import {SomeClass} from "vlkr-some-lib";
import logo from './logo.svg';
import AppStore from "./stores/App.store";

interface IAppStoreType {
    store: AppStore
}

@observer
class App extends React.Component<IAppStoreType> {
    public render() {
        const store = this.props.store;
        console.log(SomeClass.someMethod());
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload. {store.valueToString}
                </p>
            </div>
        );
    }
}

export default App;
