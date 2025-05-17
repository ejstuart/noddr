import styled from "@emotion/styled";

export const StyledHeaderContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(2, 100, 56);
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const StyledContentContainer = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(6, 31, 20);
    padding: 10px 20px;
    box-sizing: border-box;
    gap: 50px;
    flex: 1;
    overflow: auto;
`