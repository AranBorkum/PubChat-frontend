import styled, { css } from "styled-components";

export const StyledMessageBubble = styled.div`
  font-weight: bold;
  min-height: 44px;
  max-width: 160px;
  min-width: 88px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;

  ${(props) => {
    if (props.sent) {
      return css`
        border-radius: 15px 15px 5px 15px;
        background-color: cornflowerblue;
      `;
    } else {
      return css`
        border-radius: 15px 15px 15px 5px;
        background-color: darkgrey;
      `;
    }
  }}
`;
