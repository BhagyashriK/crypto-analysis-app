import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ErrorBoundary from "./views/components/error-boundary/error-boundary.index";
import { GlobalStyles } from "./views/components/normalize/normalize.index";
import Header from "./views/components/header/header.index";

import MarketOverview from "./views/routes/market-overview/market-overview.index";
import LiquidityAnalysis from "./views/routes/liquidity-analysis/liquidity-analysis.index";

const App = () => {
  return (
    // global error wrapper in case DOM crashes
    <ErrorBoundary>
      {/* Normalize browser default style */}
      <GlobalStyles />
      {/* Header */}
      <Header />
      {/* routes */}
      <Switch>
        <Route exact path="/" component={MarketOverview} />
        <Route exact path="/liquidity" component={LiquidityAnalysis} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
