# Hero [![Build Status](https://travis-ci.org/pheeria/hero.svg?branch=master)](https://travis-ci.org/pheeria/hero) [![Netlify Status](https://api.netlify.com/api/v1/badges/d59e6be8-da0a-4988-bfb4-66c4c9cb5186/deploy-status)](https://app.netlify.com/sites/resthero/deploys)

Simple web app to keep tracking of your favorite restaurants.
Deployed on Netlify at [https://resthero.netlify.com](https://resthero.netlify.com)

## Installation

1. Clone this repo
2. [Get Google Maps API Key](https://developers.google.com/maps/documentation/embed/get-api-key)
3. Create `.env` file in the root directory
4. Add your key `REACT_APP_API_KEY=YOUR_API_KEY`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Known Issues

Overlay form for adding new places propagates clicks further to the map itself.
[This seems to be a bug inherent in google maps.](https://issuetracker.google.com/issues/35819207)
A suggested solution from [the library issues](https://github.com/tomchentw/react-google-maps/issues/84) didn't work.
