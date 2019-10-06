import React from "react";
import { connect } from "react-redux";

import { Wrapper, NavBar, Link } from "./header.style";
import { Select, FormLabel } from "../form-control/form-control.index";
import { AlignRight, HideSm } from "../layout/layout.index";

import { changeLimit } from "./header.action";

const Header = ({ children, pagination, changeLimit }) => {
  const changePagination = ({ target }) => {
    changeLimit(target.value);
  };
  // Return header wrapped in style
  return (
    <Wrapper>
      <NavBar>
        <Link to="/" exact>
          Market Overview
        </Link>
        <Link to="/liquidity" exact>
          Liquidity Analysis
        </Link>
        <AlignRight>
          <HideSm>
            <FormLabel>Records Per Page</FormLabel>
          </HideSm>
          <Select value={pagination.limit} onChange={changePagination}>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="5000">All</option>
          </Select>
        </AlignRight>
      </NavBar>
    </Wrapper>
  );
};

const mapStateToProps = ({ pagination }) => {
  return { pagination };
};

export default connect(
  mapStateToProps,
  { changeLimit }
)(Header);
