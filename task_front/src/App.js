import React from 'react';
import MainContainer from './Components/MainContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>TodoApp</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
