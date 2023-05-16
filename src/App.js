import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    console.log('COMPONENT DID MOUNT')
    axios.get();
  }

  fetchAdvice = () => {
    axios.get();
  }

  render() {
    return (
      <h1>APP</h1>
    );
  }
}

export default App;