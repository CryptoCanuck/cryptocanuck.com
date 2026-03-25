"use client";

import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";

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
        <Text
          variant="label-default-s"
          onBackground="neutral-weak"
          style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
        >
          Developer / Builder / Canuck
        </Text>

        <Heading variant="display-strong-xl">CryptoCanuck</Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Building at the intersection of web technology and digital finance.
        </Text>

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
          <Button
            href="#contact"
            variant="secondary"
            size="s"
          >
            Contact
          </Button>
        </Flex>
      </Column>
    </Column>
  );
}
