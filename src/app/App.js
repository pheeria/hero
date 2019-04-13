import React from 'react';
import { Layout } from 'antd';
import SuggestContainer from '../suggest/SuggestContainer';
import MapContainer from '../map/MapContainer';
import ListContainer from '../list/ListContainer';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Header style={{ height: `15vh`, backgroundColor: `white` }}>
        <SuggestContainer />
      </Header>
      <Layout>
        <Content>
          <MapContainer />
        </Content>
        <Sider width={`300px`} style={{ backgroundColor: `white` }}>
          <ListContainer />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
