/**
 * import all reducers here and passed to combineReducers for store configuration
 */
import { combineReducers } from "redux";

import { marketOverviewReducer } from "../views/routes/market-overview/market-overview.reducer";
import { liquidityAnalysisReducer } from "../views/routes/liquidity-analysis/liquidity-analysis.reducer";
import loader from "../views/components/loader/loader.reducer";
import { headerReducer } from "../views/components/header/header.reducer";

export default combineReducers({
  marketOverview: marketOverviewReducer,
  liquidityAnalysis: liquidityAnalysisReducer,
  loader,
  pagination: headerReducer
});
