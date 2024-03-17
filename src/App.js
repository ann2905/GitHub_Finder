import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import UserItem from './components/UserItem';

class App extends Component {
  render() {
    
    return (
      <div className="App">

        <Navbar title='Github-finder'/>
        <UserItem />
        
      </div>
    );
  }
}

export default App;
