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
- CointMarketCap APIs are changed a bit. As per API documentation, direct HTTP requests to CoinMarketCap API server from browser are prohibited hence I have written a node server to get data from server.  
  (More info: https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide).
- /ticker API is no longer present in documentation. I have used /listings/latest (https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest) which is returning needed information.
- Pagination max limit is 5000 for API, so ‘All’ value from global dropdown is using 5000 as max value.
- I have used HighCharts for scatter plot graph.
