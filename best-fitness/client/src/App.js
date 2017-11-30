import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {clients: []}

  componentDidMount() {
    fetch('/clients')
      .then(res => res.json())
      .then(clients => this.setState({ clients: clients.allClients }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Users</h1>
        <h2>{this.state.clients[0]}</h2>
        {this.state.clients.map(client =>
          <div key={client.id}>{client.createAt} {client.updatedAt}</div>
          )}
      </div>
    );
  }
}

export default App;
