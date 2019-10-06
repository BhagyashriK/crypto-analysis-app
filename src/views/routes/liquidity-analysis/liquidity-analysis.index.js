import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { Container } from "../../components/layout/layout.index";
import Loader from "../../components/loader/loader.index";
import Message from "../../components/message/message.index";

import { getLiquidityAnalysis } from "./liquidity-analysis.action";

import getOptions from "./liquidity-analysis.service";
import { isEmptyObj } from "../../../utilities/is-empty-obj";

const LiquidityAnalysis = ({
  getLiquidityAnalysis,
  analysisList,
  message,
  isLoading,
  pagination
}) => {
  // Get liquidity analysis data on pagination change
  useEffect(() => {
    getLiquidityAnalysis(pagination);
  }, [getLiquidityAnalysis, pagination]);

  return (
    <Container data-testid="liquidity-analysis-wrapper">
      {/* Show loader if request is in progress */}
      {isLoading && <Loader />}

      {/* Liquidity analysis list */}
      {analysisList.length > 0 && !isLoading && (
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions(analysisList)}
        />
      )}

      {/* Show empty message if analysis list is empty */}
      {!isEmptyObj(message) && !isLoading && (
        <Message type={message.type} message={message.text} />
      )}
    </Container>
  );
};

LiquidityAnalysis.propTypes = {
  getLiquidityAnalysis: PropTypes.func,
  analysisList: PropTypes.array,
  isLoading: PropTypes.bool,
  message: PropTypes.object,
  pagination: PropTypes.object
};

const mapStateToProps = ({ liquidityAnalysis, loader, pagination }) => {
  return {
    analysisList: liquidityAnalysis.list,
    message: liquidityAnalysis.message,
    isLoading: loader.isLoading,
    pagination
  };
};

export default connect(
  mapStateToProps,
  { getLiquidityAnalysis }
)(LiquidityAnalysis);
