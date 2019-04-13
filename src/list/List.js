import React, { useState } from 'react';
import { List as AntList, Rate, Icon, AutoComplete } from 'antd';

const List = ({ places, selectedPlace, removePlace }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [modifiedPlaces, setModifiedPlaces] = useState(places);
  return (
    <div>
      <AutoComplete
        dataSource={modifiedPlaces.map(mp => mp.name)}
        style={{ width: `250px` }}
        onSelect={p =>
          setModifiedPlaces(places.filter(mp => mp.name.includes(p)))
        }
        onSearch={p =>
          !p
            ? setModifiedPlaces(places)
            : setModifiedPlaces(places.filter(mp => mp.name.includes(p)))
        }
        placeholder="Search"
      />
      <Icon
        type={sortAscending ? 'sort-ascending' : 'sort-descending'}
        onClick={() => {
          setSortAscending(!sortAscending);
          setModifiedPlaces(
            modifiedPlaces.sort((a, b) =>
              sortAscending ? a.name < b.name : a.name > b.name
            )
          );
        }}
      />
      <AntList
        itemLayout="horizontal"
        dataSource={modifiedPlaces}
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
