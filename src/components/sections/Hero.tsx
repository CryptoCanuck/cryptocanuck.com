"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  RevealFx,
  LetterFx,
  ShineFx,
} from "@once-ui-system/core";

export default function Hero() {
  return (
    <Column
      fillWidth
      minHeight="100vh"
      center
      padding="l"
      style={{
        background:
          "linear-gradient(135deg, var(--surface-background) 0%, var(--brand-background-weak) 50%, var(--surface-background) 100%)",
      }}
    >
      <Column maxWidth="m" horizontal="center" gap="m" align="center">
        <RevealFx translateY={8} speed="fast">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
            style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Developer / Builder / Canuck
          </Text>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.1}>
          <Heading variant="display-strong-xl">
            <LetterFx trigger="instant" speed="medium">
              Chris Robinson
            </LetterFx>
          </Heading>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.2}>
          <ShineFx speed={2}>
            <Text
              variant="heading-default-xl"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Distributed Systems Engineer
            </Text>
          </ShineFx>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.3}>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            style={{ textAlign: "center" }}
          >
            Building resilient, scalable systems at the intersection of
            cloud infrastructure and modern engineering.
          </Text>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.4}>
          <Flex gap="m" wrap marginTop="l">
            <Button
              href="https://github.com"
              variant="secondary"
              size="s"
            >
              GitHub
            </Button>
            <Button
              href="https://linkedin.com"
              variant="secondary"
              size="s"
            >
              LinkedIn
            </Button>
            <Button href="#contact" variant="secondary" size="s">
              Contact
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
