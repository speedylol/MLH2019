import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      
     <Map google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
                    name={'Tokyo'} />
     
     </Map>
     </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBNzF8pn2Ywyj5Fkp23pfuPM-ZDrAhGuYw")
})(App)
