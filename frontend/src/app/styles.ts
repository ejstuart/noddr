import styled from "@emotion/styled";

export const Container = styled("div")`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: ${props => props.theme.spacing[8]};
  padding-bottom: ${props => props.theme.spacing[20]};
  gap: ${props => props.theme.spacing[16]};
  font-family: ${props => props.theme.fonts.sans};
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing[20]};
  }
`;

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[32]};
  row-gap: 2;
  align-items: center;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;

export const List = styled("ol")`
  list-style-position: inside;
  list-style-type: decimal;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.mono};
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    text-align: left;
  }
`;

export const ListItem = styled("li")`
  margin-bottom: ${props => props.theme.spacing[2]};
  letter-spacing: -0.01em;
`;

export const Code = styled("code")`
  background-color: rgba(0, 0, 0, 0.05);
  padding-left: ${props => props.theme.spacing[1]};
  padding-right: ${props => props.theme.spacing[1]};
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: 600;
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  gap: ${props => props.theme.spacing[4]};
  align-items: center;
  flex-direction: column;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled("a")`
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid transparent;
  transition: colors 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--foreground);
  color: var(--background);
  gap: ${props => props.theme.spacing[2]};
  font-weight: 500;
  font-size: 0.875rem;
  height: 2.5rem;
  padding-left: ${props => props.theme.spacing[4]};
  padding-right: ${props => props.theme.spacing[4]};
  
  &:hover {
    background-color: #383838;
  }
  
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #ccc;
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
    height: 3rem;
    padding-left: ${props => props.theme.spacing[5]};
    padding-right: ${props => props.theme.spacing[5]};
    width: auto;
  }
`;

export const SecondaryButton = styled("a")`
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: colors 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.875rem;
  height: 2.5rem;
  padding-left: ${props => props.theme.spacing[4]};
  padding-right: ${props => props.theme.spacing[4]};
  width: 100%;
  
  &:hover {
    background-color: #f2f2f2;
    border-color: transparent;
  }
  
  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.145);
    
    &:hover {
      background-color: #1a1a1a;
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
    height: 3rem;
    padding-left: ${props => props.theme.spacing[5]};
    padding-right: ${props => props.theme.spacing[5]};
    width: auto;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 158px;
  }
`;

export const Footer = styled("footer")`
  grid-row-start: 3;
  display: flex;
  gap: ${props => props.theme.spacing[24]};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled("a")`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`; 