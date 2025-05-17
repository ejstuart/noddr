'use client';

import Image from "next/image";
import {
  Container,
  Main,
  List,
  ListItem,
  Code,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  Footer,
  FooterLink
} from "./styles";

export default function Page() {
  return (
    <Container>
      <Main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <List>
          <ListItem>
            Let&apos;s add a new page {" "}
            <Code>
              Goto /test
            </Code>
            .
          </ListItem>
          <ListItem>
            Save and see your changes instantly.
          </ListItem>
        </List>
        
        <ButtonsContainer>
          <PrimaryButton
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </PrimaryButton>
          <SecondaryButton
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </SecondaryButton>
        </ButtonsContainer>
      </Main>
      
      <Footer>
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Templates
        </FooterLink>
        <FooterLink
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy
        </FooterLink>
      </Footer>
    </Container>
  );
}
