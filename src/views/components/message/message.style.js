import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-bottom: 15px;
  text-align: center;
  background: ${props => props.theme.MESSAGE_BG_COLOR};
  color: ${props =>
    props.type === "error"
      ? props.theme.MESSAGE_TEXT_COLOR_ERROR
      : props.theme.MESSAGE_TEXT_COLOR};
  font-size: 1.2rem;
`;

Wrapper.defaultProps = {
  theme: {
    MESSAGE_BG_COLOR: "#323d5a",
    MESSAGE_TEXT_COLOR: "#dbedf3",
    MESSAGE_TEXT_COLOR_ERROR: "red"
  }
};
