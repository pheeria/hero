import React from 'react';
import { List, Rate, Icon } from 'antd';

const PlaceList = ({ places, removePlace }) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={places}
    renderItem={place => (
      <List.Item
        actions={[<Icon onClick={() => removePlace(place)} type="close" />]}
      >
        <List.Item.Meta
          title={<a href="https://ant.design">{place.name}</a>}
          description={
            <div>
              <Rate disabled defaultValue={place.rating} />
              Favorite: {place.favoriteFood}
            </div>
          }
        />
      </List.Item>
    )}
  />
);

export default PlaceList;
