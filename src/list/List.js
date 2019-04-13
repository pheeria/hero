import React, { useState, useEffect } from 'react';
import { List as AntList, Rate, Icon, AutoComplete, Row, Col } from 'antd';

const List = ({ places, selectedPlace, removePlace, selectPlace }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [modifiedPlaces, setModifiedPlaces] = useState(places);
  useEffect(() => setModifiedPlaces(places), [places]);
  return (
    <div>
      <Row
        style={{ height: `64px`, backgroundColor: `#000010`, padding: '10px' }}
        type="flex"
        align="middle"
        justify="space-between"
      >
        <Col span={20}>
          <AutoComplete
            si
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
        <Col span={2}>
          <Icon
            style={{ color: `white` }}
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
            onClick={() => selectPlace(place)}
            actions={[
              <Icon
                style={{ color: `white` }}
                onClick={() => removePlace(place)}
                type="close"
              />
            ]}
            style={{
              background:
                selectedPlace && selectedPlace.id === place.id
                  ? `rgba(255, 255, 255, 0.2)`
                  : null,
              padding: `10px`,
              color: `white`
            }}
          >
            <AntList.Item.Meta
              title={<span style={{ color: `white` }}>{place.name}</span>}
              description={
                <div style={{ color: `white` }}>
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
