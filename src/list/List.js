import React, { useState } from 'react';
import { List as AntList, Rate, Icon, AutoComplete, Row, Col } from 'antd';

const List = ({ places, selectedPlace, removePlace }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [modifiedPlaces, setModifiedPlaces] = useState(places);
  return (
    <div style={{ padding: '10px' }}>
      <Row type="flex" align="middle" justify="space-between">
        <Col span="20">
          <AutoComplete
            dataSource={modifiedPlaces.map(mp => mp.name)}
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
        </Col>
        <Col span="2">
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
        </Col>
      </Row>
      <AntList
        size="small"
        dataSource={modifiedPlaces}
        renderItem={place => (
          <AntList.Item
            actions={[<Icon onClick={() => removePlace(place)} type="close" />]}
            style={{
              border:
                selectedPlace && selectedPlace.id === place.id
                  ? `1px solid red`
                  : 'none',
              padding: '10px'
            }}
          >
            <AntList.Item.Meta
              title={place.name}
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
