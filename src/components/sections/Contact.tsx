"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  IconButton,
  RevealFx,
} from "@once-ui-system/core";

const links = [
  { label: "Email", href: "mailto:support@rimdc.com", icon: "mail" as const },
  { label: "GitHub", href: "https://github.com", icon: "code" as const },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "globe" as const,
  },
  { label: "X", href: "https://x.com", icon: "lightning" as const },
];

export default function Contact() {
  return (
    <Column
      id="contact"
      fillWidth
      padding="xl"
      paddingY="104"
      horizontal="center"
    >
      <Column maxWidth="l" gap="xl" fillWidth>
        <RevealFx translateY={8} speed="fast">
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
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.1}>
          <Heading variant="heading-strong-l">Get in Touch</Heading>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.2}>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Feel free to reach out for collaborations, questions about
            distributed systems, or just to say hello.
          </Text>
        </RevealFx>

        <RevealFx translateY={16} speed="medium" delay={0.3}>
          <Flex gap="m" wrap vertical="center">
            {links.map((link) => (
              <Flex key={link.label} vertical="center" gap="8">
                <IconButton
                  href={link.href}
                  icon={link.icon}
                  variant="secondary"
                  size="m"
                  tooltip={link.label}
                />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {link.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
