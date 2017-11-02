import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Navbar />, document.getElementById('fixed-navbar'));

ReactDOM.render(<Jumbotron />, document.getElementById('jumbotron'));

ReactDOM.render(<Footer />, document.getElementById('footer'))