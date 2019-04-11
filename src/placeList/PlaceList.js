import React from 'react';
import { List, Skeleton, Rate } from 'antd';

const PlaceList = ({ places }) => (
  <List
    className="demo-loadmore-list"
    itemLayout="vertical"
    dataSource={places}
    renderItem={item => (
      <List.Item actions={[<button>X</button>]}>
        <Skeleton title={true} loading={false} active>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.favoriteFood}
          />
          <Rate defaultValue={item.rating} />
        </Skeleton>
      </List.Item>
    )}
  />
);

export default PlaceList;
