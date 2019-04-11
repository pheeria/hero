import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './geosuggest.css';
import './App.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Layout } from 'antd';

import { List, Skeleton } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const berlin = {
  lat: 52.52000659999999,
  lng: 13.404953999999975
};

const places = [
  {
    id: 'uuid',
    name: 'Delivery Hero',
    rating: 5,
    favoriteFood: 'Et',
    location: {
      lat: 52.5248,
      lng: 13.393141600000035
    }
  },
  {
    id: 'uuid2',
    name: 'Berlin Cigkofte',
    rating: 5,
    favoriteFood: 'Cig kofte',
    location: {
      lat: 52.47732379999999,
      lng: 13.425160300000016
    }
  }
];

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: berlin.lat, lng: berlin.lng }}
  >
    {props.places.map(place => (
      <Marker key={place.id} position={place.location} />
    ))}
  </GoogleMap>
));

class App extends Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: `15vh`, backgroundColor: `white` }}>
            <Geosuggest
              placeholder="Anywhere"
              onSuggestSelect={this.onSuggestSelect}
              location={
                // eslint-disable-next-line
                new google.maps.LatLng(berlin.lat, berlin.lng)
              }
              radius="20"
            />
          </Header>
          <Layout>
            <Content>
              <MyMapComponent
                places={places}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `70vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Content>
            <Sider style={{ backgroundColor: `white` }}>
              <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={places}
                renderItem={item => (
                  <List.Item actions={[<button>X</button>]}>
                    <Skeleton title={false} loading={item.loading} active>
                      <List.Item.Meta
                        title={<a href="https://ant.design">{item.name}</a>}
                        description={item.favoriteFood}
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
