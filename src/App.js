import React, { Component } from 'react';
import WeatherContainer from './containers/WeatherContainer'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    );
  }
}

export default App;
