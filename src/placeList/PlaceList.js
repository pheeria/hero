import React from 'react';
import { List, Rate, Icon } from 'antd';

const PlaceList = ({ places, selectedPlace, removePlace }) => (
  <List
    itemLayout="horizontal"
    dataSource={places}
    renderItem={place => (
      <List.Item
        actions={[<Icon onClick={() => removePlace(place)} type="close" />]}
        style={
          selectedPlace && selectedPlace.id === place.id
            ? { border: `1px solid red` }
            : null
        }
      >
        <List.Item.Meta
          title={<a href="https://ant.design">{place.name}</a>}
          description={
            <div>
              <div>
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />:{' '}
                {place.favoriteFood}
              </div>
              <div>
                <Rate disabled defaultValue={place.rating} />
              </div>
            </div>
          }
        />
      </List.Item>
    )}
  />
);

export default PlaceList;
