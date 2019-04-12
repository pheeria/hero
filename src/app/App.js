import React, { Component } from 'react';
import Map from '../map/Map';
import PlaceListContainer from '../placeList/PlaceListContainer';
import './App.css';
import { Layout } from 'antd';
import SuggestContainer from '../suggest/SuggestContainer';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: `15vh`, backgroundColor: `white` }}>
            <SuggestContainer />
          </Header>
          <Layout>
            <Content>
              <Map
                places={places}
                berlin={berlin}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `70vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Content>
            <Sider style={{ backgroundColor: `white` }}>
              <PlaceListContainer />
            </Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
