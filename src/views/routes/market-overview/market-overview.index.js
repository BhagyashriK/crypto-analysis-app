import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "../../components/layout/layout.index";
import { Table } from "../../components/table/table.index";
import Loader from "../../components/loader/loader.index";
import Message from "../../components/message/message.index";

import { getMarketOverview } from "./market-overview.action";

import { isEmptyObj } from "../../../utilities/is-empty-obj";
import humanizeCurrency from "../../../utilities/humanize-currency";

const MarketOverview = ({
  getMarketOverview,
  overviewList,
  message,
  isLoading,
  pagination
}) => {
  // Get Market Overview On Pagination Change
  useEffect(() => {
    getMarketOverview(pagination);
  }, [getMarketOverview, pagination]);

  const renderList = () => {
    return overviewList.map(
      ({
        id,
        cmc_rank,
        name,
        quote: {
          USD: { price, percent_change_24h, market_cap, volume_24h } = {}
        } = {}
      }) => (
        <tr key={id}>
          <td>{cmc_rank}</td>
          <td>{name}</td>
          <td>{price ? `${humanizeCurrency({ number: price })}` : "N/A"}</td>
          <td>{percent_change_24h ? `${percent_change_24h}%` : "N/A"} </td>
          <td>
            {market_cap ? `${humanizeCurrency({ number: market_cap })}` : "N/A"}
          </td>
          <td>
            {volume_24h ? `${humanizeCurrency({ number: volume_24h })}` : "N/A"}
          </td>
        </tr>
      )
    );
  };

  return (
    <Container data-testid="market-overview-wrapper">
      {/* Show loader if request is in progress */}
      {isLoading && <Loader />}

      {/* Market Overview List */}

      {!isLoading && (
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Price Change (24h)</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
            </tr>
          </thead>
          {overviewList.length > 0 && (
            <tbody data-testid="overview-list">{renderList()}</tbody>
          )}
        </Table>
      )}

      {/* Show empty message if overview list is empty */}
      {!isEmptyObj(message) && !isLoading && (
        <Message type={message.type} message={message.text} />
      )}
    </Container>
  );
};

MarketOverview.propTypes = {
  getMarketOverview: PropTypes.func,
  overviewList: PropTypes.array,
  isLoading: PropTypes.bool,
  message: PropTypes.object,
  pagination: PropTypes.object
};

const mapStateToProps = ({ marketOverview, loader, pagination }) => {
  return {
    overviewList: marketOverview.list,
    message: marketOverview.message,
    isLoading: loader.isLoading,
    pagination
  };
};

export default connect(
  mapStateToProps,
  { getMarketOverview }
)(MarketOverview);
