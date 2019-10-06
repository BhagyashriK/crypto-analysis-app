import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.HEADER_BG};
  color: ${props => props.theme.HEADER_TEXT_COLOR};
  margin-bottom: 15px;
`;

Wrapper.defaultProps = {
  theme: {
    HEADER_BG: "#323d5a",
    HEADER_TEXT_COLOR: "#ffffff"
  }
};

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    max-width: 540px;
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    max-width: 720px;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 960px;
  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 15px 20px;
  color: ${props => props.theme.LINK_TEXT_COLOR};
  text-decoration: none;
  &.active {
    background: ${props => props.theme.ACTIVE_LINK_BG};
    color: ${props => props.theme.ACTIVE_LINK_TEXT_COLOR};
  }
`;

Link.defaultProps = {
  theme: {
    LINK_TEXT_COLOR: "#b1b5b7",
    ACTIVE_LINK_BG: "#283149",
    ACTIVE_LINK_TEXT_COLOR: "#ffffff"
  }
};
