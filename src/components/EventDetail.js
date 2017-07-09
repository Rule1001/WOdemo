import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Event from './Event';
import EventSection from './EventSection';
import Button from './Button'

const EventDetail = ({ event }) => {
  const { title, artist, thumbnail_image, image, url } = event;

  const { thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
    } = styles;

  return (
    <Event>
      <EventSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </EventSection>

      <EventSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </EventSection>

      <EventSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </EventSection>
    </Event>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18

  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


export default EventDetail;