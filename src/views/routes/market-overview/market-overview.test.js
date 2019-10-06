import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import getMockedState from "../../../mocks/state-mock";
import thunk from "../../../mocks/thunk-mock";

import MarketOverview from "./market-overview.index";
import { marketOverviewReducer } from "./market-overview.reducer";

afterEach(cleanup);

const mockedState = getMockedState();

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      marketOverviewReducer,
      initialState,
      applyMiddleware(thunk)
    ),
    history = createMemoryHistory({ initialEntries: ["/"] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store
  };
}

test("Should render paginated records on overview list table", () => {
  const { getByTestId } = renderWithRedux(<MarketOverview />, {
    initialState: mockedState
  });
  const overviewList = getByTestId("overview-list");
  expect(overviewList.children.length).toBe(mockedState.pagination.limit);
});

test("Should show 'No Records Found' message if market overview list is empty", () => {
  mockedState.marketOverview.list = [];
  mockedState.marketOverview.message = {
    type: "info",
    text: "No Records Found"
  };
  const { getByText, getByTestId } = renderWithRedux(<MarketOverview />, {
    initialState: mockedState
  });
  const markerOverviewWrapper = getByTestId("market-overview-wrapper");
  const emptyMsg = getByText("No Records Found");
  expect(markerOverviewWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.loader.isLoading = true;
  const { getByText, getByTestId } = renderWithRedux(<MarketOverview />, {
    initialState: mockedState
  });
  const markerOverviewWrapper = getByTestId("market-overview-wrapper");
  const loader = getByText("Loading...");
  expect(markerOverviewWrapper).toContainElement(loader);
});
