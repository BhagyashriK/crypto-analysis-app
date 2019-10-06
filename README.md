React application for crypto currency listing

Consist of two routes:

- Market Overview
- Liquidity Analysis

**Tech Stack:**

React, Redux, Redux Thunk, React Router DOM, Styled components, HighCharts, Jest, React Testing library, Create React App(CRA)

**Local Setup Steps:**

- clone repository using `git clone git@github.com:BhagyashriK/crypto-analysis-app.git`
- run `yarn install` to install dependencies
- run `yarn start` to start react app

To Build Production Code

- run `yarn build` for production react app build

**Test suite Steps:**
`cd client && yarn test`

**Assumptions/NOTES:**

- This application is single page react application created using Create React App
- Intermediate node server is written because client side HTTP requests are prohibited through CORS on coin market API. (https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide). Please find server repository at:
  https://github.com/BhagyashriK/cryptoserver.
