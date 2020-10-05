import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var location = Math.floor((Math.random() * 100) + 1);

ReactDOM.render(<App locationID={location}/>, document.getElementById('app'));
