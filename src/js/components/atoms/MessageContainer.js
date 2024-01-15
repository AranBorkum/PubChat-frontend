import styled, { css } from "styled-components";

const StyledMessageContainer = styled.div`
  width: 500px;
  display: flex;

  ${(props) => {
    if (props.sent) {
      return css`
        justify-content: right;
      `;
    } else {
      return css`
        justify-content: left;
      `;
    }
  }}
`;

function MessageContainer({ sent, children }) {
  return (
    <StyledMessageContainer sent={sent}>{children}</StyledMessageContainer>
  );
}

export default MessageContainer;
