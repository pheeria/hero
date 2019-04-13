import React from 'react';
import { List as AntList, Rate, Icon } from 'antd';

const List = ({ places, selectedPlace, removePlace }) => (
  <AntList
    itemLayout="horizontal"
    dataSource={places}
    renderItem={place => (
      <AntList.Item
        actions={[<Icon onClick={() => removePlace(place)} type="close" />]}
        style={
          selectedPlace && selectedPlace.id === place.id
            ? { border: `1px solid red` }
            : null
        }
      >
        <AntList.Item.Meta
          title={<p>{place.name}</p>}
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
      </AntList.Item>
    )}
  />
);

export default List;
