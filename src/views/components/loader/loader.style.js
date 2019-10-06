import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  color: ${props => props.theme.LOADER_TEXT_COLOR};
  font-size: 1.2rem;
`;

Wrapper.defaultProps = {
  theme: {
    LOADER_TEXT_COLOR: "#dbedf3"
  }
};

export const LoadingIcon = styled.div`
  display: inline-block;
  width: 36px;
  height: 36px;
  &:after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
