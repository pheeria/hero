import React, { useState } from 'react';
import { List as AntList, Rate, Icon } from 'antd';

const List = ({ places, selectedPlace, removePlace }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [sortedPlaces, setSortedPlaces] = useState(places);
  return (
    <div>
      <Icon
        type={sortAscending ? 'sort-ascending' : 'sort-descending'}
        onClick={() => {
          setSortAscending(!sortAscending);
          setSortedPlaces(
            sortedPlaces.sort((a, b) =>
              sortAscending ? a.name < b.name : a.name > b.name
            )
          );
        }}
      />
      <AntList
        itemLayout="horizontal"
        dataSource={sortedPlaces}
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
                    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                    : {place.favoriteFood}
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
    </div>
  );
};

export default List;
