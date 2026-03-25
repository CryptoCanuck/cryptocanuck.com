"use client";

import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";

const links = [
  { label: "Email", href: "mailto:support@rimdc.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Contact() {
  return (
    <Column
      id="contact"
      fillWidth
      padding="xl"
      paddingY="2xl"
      horizontal="center"
    >
      <Column maxWidth="l" gap="xl" fillWidth>
        <Text
          variant="label-default-s"
          onBackground="neutral-weak"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.6,
          }}
        >
          Contact
        </Text>

        <Heading variant="heading-strong-l">Get in Touch</Heading>

        <Flex gap="m" wrap>
          {links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="secondary"
              size="s"
            >
              {link.label}
            </Button>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
