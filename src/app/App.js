import React from 'react';
import { Layout } from 'antd';
import SuggestContainer from '../suggest/SuggestContainer';
import MapContainer from '../map/MapContainer';
import ListContainer from '../list/ListContainer';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Sider width={`300px`} breakpoint="lg" collapsedWidth="0">
        <ListContainer />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: `white` }}>
          <SuggestContainer />
        </Header>
        <Content>
          <MapContainer />
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default App;
