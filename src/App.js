import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './geosuggest.css';

class App extends Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Anywhere"
          onSuggestSelect={this.onSuggestSelect}
          location={
            // eslint-disable-next-line
            new google.maps.LatLng(52.52000659999999, 13.404953999999975)
          }
          radius="20"
        />
      </div>
    );
  }
}

export default App;
