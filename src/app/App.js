import React, { Component } from 'react';
import PlaceListContainer from '../placeList/PlaceListContainer';
import './App.css';
import { Layout } from 'antd';
import SuggestContainer from '../suggest/SuggestContainer';
import MapContainer from '../map/MapContainer';

const { Header, Footer, Sider, Content } = Layout;

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
              <MapContainer />
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
