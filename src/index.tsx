import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; // Global styles
import PageWeb3Modal from './web3modal';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <PageWeb3Modal />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
