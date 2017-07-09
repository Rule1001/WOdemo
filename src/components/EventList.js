import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import EventDetail from './EventDetail';

class EventList extends React.Component {
  state = {
    events: []
  };


  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ events: response.data }));
  }

  renderAlbums() {
    return this.state.events.map(event =>
      <EventDetail key={event.title} event={event} />
    )
  }

  render() {
    return (
      <ScrollView>
        {
          this.renderAlbums()
        }
      </ScrollView>
    );
  }
}

export default EventList;
