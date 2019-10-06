import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { Route, Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

import thunk from "../../../mocks/thunk-mock";
import getMockedState from "../../../mocks/state-mock";

import LiquidityAnalysis from "./liquidity-analysis.index";
import {
  initialState,
  liquidityAnalysisReducer
} from "./liquidity-analysis.reducer";

afterEach(cleanup);

// Mocked state
const mockedState = getMockedState();

const renderComponent = mockedState => {
  return render(
    <Provider
      store={createStore(
        liquidityAnalysisReducer,
        { ...initialState, ...mockedState },
        applyMiddleware(thunk)
      )}
    >
      <Router
        history={createMemoryHistory({
          initialEntries: ["/liquidity"]
        })}
      >
        <Route path="/liquidity" component={LiquidityAnalysis} />
      </Router>
    </Provider>
  );
};

test("Should render paginated data points on scattered graph", () => {
  const { getByTestId } = renderComponent(mockedState);
  const liquidityAnalysisWrapper = getByTestId("liquidity-analysis-wrapper");
  const points = liquidityAnalysisWrapper.getElementsByClassName(
    "highcharts-point"
  );
  expect(points.length).toBe(mockedState.pagination.limit);
});

test("Should show 'No Liquidity Details Found' message if liquidity analysis list is empty", () => {
  mockedState.liquidityAnalysis.list = [];
  mockedState.liquidityAnalysis.message = {
    type: "info",
    text: "No Liquidity Details Found"
  };
  const { getByText, getByTestId } = renderComponent(mockedState);
  const liquidityAnalysisWrapper = getByTestId("liquidity-analysis-wrapper");
  const emptyMsg = getByText("No Liquidity Details Found");
  expect(liquidityAnalysisWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.loader.isLoading = true;
  const { getByText, getByTestId } = renderComponent(mockedState);
  const liquidityAnalysisWrapper = getByTestId("liquidity-analysis-wrapper");
  const loader = getByText("Loading...");
  expect(liquidityAnalysisWrapper).toContainElement(loader);
});
