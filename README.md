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


### Problem Statement
Create a webapp that allows for a simple analysis of crypto assets. The page should present a navigation bar with two pages:

* `/` - Market overview
* `/liquidity` - Liquidity analysis page

The app should fetch all the required data from the [coinmarketcap.com](https://coinmarketcap.com/api/) `/ticker` API endpoint.

By default `/ticker` endpoint returns top 100 coins. There should be an option to change it by using a select/dropdown with predefined values:

* `10`
* `50`
* `all` (maximum of [limit])

Keep it mind select/dropdown should have global scope and it should affect data on both pages: Market Overview and Liquidity.

##### Market Overview

It should render a *table* (with received data) sorted by rank:

```
+------+----------+-----------+--------------------+------------------+----------------+
| Rank |   Name   |   Price   | Price Change (24h) |    Market Cap    |  Volume (24h)  |
+------+----------+-----------+--------------------+------------------+----------------+
|    1 | Bitcoin  | $6,764.99 | -4.41%             | $114,784,460,451 | $4,551,630,000 |
|    2 | Ethereum | $395.74   | -1.04%             | $39,064,506,094  | $1,367,120,000 |
|  ... | ...      | ...       | ...                | ...              | ...            |
+------+----------+-----------+--------------------+------------------+----------------+
```

##### Liquidity

It should render a *scatter plot chart* where:

* `X` axis is Market Capitalization
* `Y` axis is Volume (24h)
* `Z` axis (or size of the point) is absolute price change (24h)

```
  |
  |                                     *
  |                                *
V |                  *        *        *
o |                       *
l |              *           *  *
u |     *           *  *      *      *
m |               *         *
e |        *   *      *         *
  |              *       *
  |           *      *
  |  *
  +---------------------------------------------
                   Market Cap
```

Chart should be interactive – when hover over the point, it should display a tooltip with information like (`name`, `marketcap`, `volume` & `price change`).

Each point represents one coin.

### Architecture

* Your solution should be written in React. You may use [create-react-app](https://github.com/facebook/create-react-app) or similar.
* For UI you can use any framework (Bootstrap, Semantic-UI, etc) or write your own CSS.
* You're free to use any charts library. Think about the best fit for solving the task.
* For state management you may use a state-management library such as `Redux` or use React's `setState()`.
* Make sure it works in latest Chrome, Safari or Firefox
* Webpage should be responsive.
