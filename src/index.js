import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <body className="App-body">
          <img src={logo} className="App-logo" alt="react logo"/>
          <h1>React Random Color</h1>
        </body>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
