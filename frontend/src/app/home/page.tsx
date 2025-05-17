"use client";

import { Chat } from "./components/Chat";
import { Drawer } from "./components/Drawer";
import { StyledContentContainer, StyledHeaderContainer } from "./styles";

export default function HomePage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <StyledHeaderContainer>
        This is the header
        <div>This content should be on the right</div>
      </StyledHeaderContainer>
      <StyledContentContainer>
        <Drawer />
        <Chat />
      </StyledContentContainer>
    </div>
  );
}
