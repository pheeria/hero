import React, { useState, useEffect } from 'react';
import { List as AntList, Rate, Icon, AutoComplete, Row, Col } from 'antd';

const List = ({ places, selectedPlace, removePlace, selectPlace }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [modifiedPlaces, setModifiedPlaces] = useState(places);

  useEffect(() => setModifiedPlaces(places), [places]);

  return (
    <Col>
      <Row
        style={{ height: `64px`, backgroundColor: `#000010`, padding: `10px` }}
        type="flex"
        align="middle"
        justify="space-between"
      >
        <Col span={20}>
          <AutoComplete
            dataSource={modifiedPlaces.map(mp => mp.name)}
            onSelect={p => selectPlace(places.find(mp => mp.name === p))}
            onSearch={p =>
              !p
                ? setModifiedPlaces(places)
                : setModifiedPlaces(
                    places.filter(mp =>
                      mp.name.toLowerCase().includes(p.toLowerCase())
                    )
                  )
            }
            placeholder="Search"
          />
        </Col>
        <Col span={2}>
          <Icon
            style={{ color: `white` }}
            type={sortAscending ? `sort-ascending` : `sort-descending`}
            onClick={() => {
              setModifiedPlaces(
                modifiedPlaces.sort((a, b) =>
                  sortAscending ? a.name < b.name : a.name > b.name
                )
              );
              setSortAscending(!sortAscending);
            }}
          />
        </Col>
      </Row>
      <AntList
        dataSource={modifiedPlaces}
        style={{
          overflow: `auto`,
          height: `calc(100vh - 64px)`
        }}
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
                <Col style={{ color: `white` }}>
                  <Row>
                    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                    {`  `}
                    {place.favoriteFood}
                  </Row>
                  <Row>
                    <Rate disabled defaultValue={place.rating} />
                  </Row>
                </Col>
              }
            />
          </AntList.Item>
        )}
      />
    </Col>
  );
};

export default List;
