import styled from "styled-components"

export const TabComponent = styled.div`
 transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;
export default TabComponent
