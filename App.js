import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import EventList from './src/components/EventList';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Whats Occurin......!'} />
        <EventList />
      </View>

    );
  }
}

export default App;
