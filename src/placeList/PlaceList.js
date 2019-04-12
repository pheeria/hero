import React from 'react';
import { List, Skeleton, Rate } from 'antd';

const PlaceList = ({ places, removePlace }) => (
  <List
    className="demo-loadmore-list"
    itemLayout="vertical"
    dataSource={places}
    renderItem={place => (
      <List.Item
        actions={[<button onClick={() => removePlace(place)}>X</button>]}
      >
        <Skeleton title={true} loading={false} active>
          <List.Item.Meta
            title={<a href="https://ant.design">{place.name}</a>}
            description={place.favoriteFood}
          />
          <Rate disabled defaultValue={place.rating} />
        </Skeleton>
      </List.Item>
    )}
  />
);

export default PlaceList;
